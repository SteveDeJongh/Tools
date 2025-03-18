import "./textSanitizer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, UseFormRegister } from "react-hook-form";
import { TTextSanitizerForm, PaymentTerm } from "./TextSanitizerTypes";
import { useMemo } from "react";

const SHIP_MESSAGE = "Available to ship: ";

const BIKE_TERMS: PaymentTerm[] = [
  { name: "N30", min: 0, enabled: true },
  { name: "30/60/90", min: 5000, enabled: true },
  { name: "Spring", min: 10000, enabled: false },
];

const COMPONENT_TERMS: PaymentTerm[] = [
  { name: "N30", min: 0, enabled: true },
  { name: "N60", min: 500, enabled: true },
  { name: "N90", min: 1000, enabled: true },
];

const SIZES = [
  "XS ",
  "SM ",
  "MD ",
  "LG ",
  "XL ",
  "48 ",
  "50 ",
  "52 ",
  "54 ",
  "56 ",
  "58 ",
];

let outputText: string = "";

const bikeRegexp = /Available Bikes:\s*(.*?)\s*(?=\n\n)/s;
const totalRegexp = /After base discount:\s*\$\s*([\d,]+\.\d{2})/;
const qtyRegexp = /Revised\/order: (\d*)/;

function returnText(data: TTextSanitizerForm) {
  const bikes = cleanBikeLines(
    data.text.match(bikeRegexp)![1].split("\n"),
    data.removesize,
    data.removeyear
  );
  const total = parseFloat(data.text.match(totalRegexp)![1].trim());
  const bikeQty = parseFloat(data.text.match(qtyRegexp)![1]);
  const termsMessage = determineTermsMessage(data, total);
  const freightEligible = determineFreight(data, bikeQty);
  outputText = formatOutputText(
    bikes,
    total,
    bikeQty,
    termsMessage,
    freightEligible
  );
  return outputText;
}

function formatOutputText(
  cleanLines: string[],
  total: number,
  bikeQty: number,
  terms: string,
  freightEligible: string
) {
  const textLines: string[] = [];
  textLines.push(`${SHIP_MESSAGE}\n`);

  cleanLines.forEach((line: string, idx: number) => {
    if (idx === cleanLines.length - 1) {
      textLines.push(line.concat("\n"));
    } else {
      textLines.push(line);
    }
  });

  const summaryLine = `${bikeQty} ${bikeQty >= 2 ? "pieces" : "piece"} for $${total} ${terms} ${freightEligible}`;

  textLines.push(summaryLine);
  return textLines.join("\n");
}

function determineFreight(data: TTextSanitizerForm, qty: number) {
  if (data.checkfreight) {
    return qty >= 6 ? "and eligible for freight rebate." : "";
  }
  return "";
}

function determineTermsMessage(data: TTextSanitizerForm, total: number) {
  let msg = "";
  const isbike = data.type === "bike";
  const sortedTerms = isbike
    ? BIKE_TERMS.toSorted((a, b) => b.min - a.min)
    : COMPONENT_TERMS.toSorted((a, b) => b.min - a.min);

  sortedTerms.some((term: PaymentTerm) => {
    if (total > term.min && data[term.name as keyof TTextSanitizerForm]) {
      msg = `on ${term.name} terms`;
      return true;
    }
  });

  return msg;
}

function cleanBikeLines(lines: string[], size: boolean, year: boolean) {
  const SIZE_REGEX = new RegExp(SIZES.join("|"));
  const YEAR_REGEX = /\s20\d{2}/;

  return lines.map((line) => {
    let newLine = line.trim();
    if (year) newLine = newLine.replace(YEAR_REGEX, "");
    if (size) newLine = newLine.replace(SIZE_REGEX, "");
    return newLine;
  });
}

async function copyText() {
  try {
    navigator.clipboard.writeText(outputText);
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
}

function handleClearText() {
  const textArea = document.getElementById("inputText") as HTMLTextAreaElement;
  if (textArea) {
    textArea.value = "";
  }
}

type sgProps = {
  terms: PaymentTerm[];
  label: string;
  register: UseFormRegister<TTextSanitizerForm>;
};

function SwitchGroup({ terms, label, register }: sgProps) {
  return (
    <>
      <Form.Label className="">{label}:</Form.Label>
      <div className="switch-container">
        {terms.map((term) => (
          <div key={`default-${term.name}`} className="mb-3">
            <Form.Check
              type="switch"
              label={term.name}
              defaultChecked={term.enabled}
              {...register(term.name as keyof TTextSanitizerForm)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function TextSanitizer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TTextSanitizerForm>();

  const selectedProductType = watch("type", "bike");
  const isBike = selectedProductType === "bike";
  const shipmentTerms = useMemo(() => {
    return isBike ? BIKE_TERMS : COMPONENT_TERMS;
  }, [isBike]);
  const shipmentLabel = isBike
    ? "Bike Shipment Terms"
    : "Component Shipment Terms";

  function onSubmit(data: TTextSanitizerForm) {
    const text = returnText(data);
    const resultArea = document.getElementById(
      "results"
    ) as HTMLParagraphElement;
    resultArea.textContent = text;
  }
  return (
    <>
      <section className="text-sanitizer-tool">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-4" controlId="formTextInput">
            <Form.Label>
              <h2 className="pt-3">Mail Delivery Bikes Report Sanitizer</h2>
            </Form.Label>
            <Form.Text
              className="w-100"
              as="textarea"
              placeholder="Input report here..."
              id="inputText"
              style={{ height: "100px" }}
              {...register("text", {
                required: "IConnect Report text is required",
              })}
            />
            {errors.text && (
              <Form.Text className="text-danger">
                {errors.text.message}
              </Form.Text>
            )}
            <Button
              variant="secondary"
              type="button"
              className="mt-2"
              onClick={handleClearText}
            >
              Clear text
            </Button>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label htmlFor="bike" className="d-block">
              Bike or Component Shipment?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Bike"
              id="bike"
              value={"bike"}
              defaultChecked={true}
              {...register("type")}
            />
            <Form.Check
              type="radio"
              label="Component"
              id="component"
              value={"component"}
              {...register("type")}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <SwitchGroup
              terms={shipmentTerms}
              label={shipmentLabel}
              register={register}
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Check
              type="checkbox"
              id="removeyear"
              label="Remove year?"
              defaultChecked={true}
              {...register("removeyear")}
            />
            <Form.Check
              type="checkbox"
              id="removesize"
              label="Remove double size?"
              defaultChecked={true}
              disabled={selectedProductType === "component"}
              {...register("removesize")}
            />
            <Form.Check
              type="checkbox"
              id="checkFreight"
              label="Check Freight Eligibility?"
              defaultChecked={true}
              disabled={selectedProductType === "component"}
              {...register("checkfreight")}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>

        <div className="result-div mt-5">
          <h2>Results</h2>
          <p id="results" className="container border p-3"></p>
          <Button variant="secondary" onClick={() => copyText()}>
            Copy to Clipboard
          </Button>
        </div>
      </section>
    </>
  );
}

export { TextSanitizer };
