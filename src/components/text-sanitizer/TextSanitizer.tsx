import "./textSanitizer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { TTextSanitizerForm } from "./TextSanitizerTypes";

type PaymentTerm = {
  name: string;
  min: number;
  enabled: boolean;
};

const SHIPMESSAGE = "Available to ship: ";

const BIKETERMS: PaymentTerm[] = [
  { name: "N30", min: 0, enabled: true },
  { name: "30/60/90", min: 5000, enabled: true },
  { name: "Spring", min: 10000, enabled: false },
];

const COMPONENTTERMS: PaymentTerm[] = [
  { name: "N30", min: 0, enabled: true },
  { name: "N60", min: 500, enabled: true },
  { name: "N90", min: 1000, enabled: true },
];

const YEARS = Array(10)
  .fill(2018)
  .map((x, y) => x + y);

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

function returnText(data: TTextSanitizerForm) {
  const splitText = data.text.split("\n\n");
  const bikes = splitText[2].split("\n");
  const cleanLines = cleanBikeLines(bikes, data.removesize, data.removeyear);
  const totalLines = splitText[3].split("\n");
  const { total, bikeQty } = orderTotals(totalLines[2], totalLines[4]);
  const termsMessage = determineTermsMessage(data, total);
  const freightEligible = determineFreight(data, bikeQty);
  const text = formatOutputText(
    cleanLines,
    total,
    bikeQty,
    termsMessage,
    freightEligible
  );

  return text.join("\n");
}

function formatOutputText(
  cleanLines: string[],
  total: number,
  bikeQty: number,
  terms: string,
  freightEligible: string
) {
  const textLines: string[] = [];
  textLines.push(`${SHIPMESSAGE}\n`);

  cleanLines.forEach((line: string, idx: number) => {
    if (idx === cleanLines.length - 1) {
      textLines.push(line.concat("\n"));
    } else {
      textLines.push(line);
    }
  });

  const summaryLine = `${bikeQty} ${bikeQty >= 2 ? "pieces" : "piece"} for ${total} ${terms} ${freightEligible}`;

  textLines.push(summaryLine);
  return textLines;
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
    ? BIKETERMS.toSorted((a, b) => b.min - a.min)
    : COMPONENTTERMS.toSorted((a, b) => b.min - a.min);

  sortedTerms.some((term: PaymentTerm) => {
    if (data[`${isbike ? "bikeTerms" : "componentTerms"}`][term.name]) {
      if (total >= term.min) {
        msg = `on ${term.name} terms`;
        return total >= term.min;
      }
    }
  });

  return msg;
}

function orderTotals(totalLine: string, bikeQtyLine: string) {
  const total = parseFloat(totalLine.match(/[+-]?\d+(\.\d+)?/g)![0]);
  const bikeQty = parseFloat(bikeQtyLine.match(/\d+(\.\d+)?/)![0]);
  return { total, bikeQty };
}

function cleanBikeLines(lines: string[], size: boolean, year: boolean) {
  return lines.map((line) => {
    let newLine = line;
    if (year) {
      const yearRexp = /\s20\d{2}/;
      newLine = newLine.replace(yearRexp, "");
    }
    if (size) {
      const sizeRexp = new RegExp(SIZES.join("|"));
      newLine = newLine.replace(sizeRexp, "");
    }

    return newLine;
  });
}

function TextSanitizer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TTextSanitizerForm>();

  const productSelection = watch("type");

  function onSubmit(data: TTextSanitizerForm) {
    const text = returnText(data);
    const resultArea = document.getElementById(
      "results"
    ) as HTMLParagraphElement;
    resultArea.textContent = text;
  }
  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formTextInput">
          <Form.Label>Mail Delivery Bikes Report Sanitizer</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Input report here..."
            {...register("text", {
              required: "IConnect Report text is required",
            })}
          />
          {errors.text && (
            <Form.Text className="text-danger">{errors.text.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bike or Component Shipment?</Form.Label>
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
        <Form.Group className="mb-3">
          {productSelection === "bike" ? (
            <>
              <Form.Label>Bike Shipment Terms</Form.Label>
              <div className="switch-container">
                {BIKETERMS.map((term) => (
                  <div key={`default-${term.name}`} className="mb-3">
                    <Form.Check
                      type={"switch"}
                      // id={term.name}
                      label={term.name}
                      defaultChecked={term.enabled}
                      {...register(
                        `bikeTerms.${term.name}` as keyof TTextSanitizerForm
                      )}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <Form.Label>Component Shipment Terms</Form.Label>
              <div className="switch-container">
                {COMPONENTTERMS.map((term) => (
                  <div key={`default-${term.name}`} className="mb-3">
                    <Form.Check
                      type={"switch"}
                      // id={term.name}
                      label={term.name}
                      defaultChecked={term.enabled}
                      {...register(
                        `componentTerms.${term.name}` as keyof TTextSanitizerForm
                      )}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Check
            type="checkbox"
            id="removeyear"
            label="Remove year?"
            defaultChecked={true}
            {...register("removeyear")}
          ></Form.Check>
          <Form.Check
            type="checkbox"
            id="removesize"
            label="Remove double size?"
            defaultChecked={true}
            disabled={productSelection === "component"}
            {...register("removesize")}
          ></Form.Check>
          <Form.Check
            type="checkbox"
            id="checkFreigth"
            label="Check Freight Eligibility?"
            defaultChecked={true}
            disabled={productSelection === "component"}
            {...register("checkfreight")}
          ></Form.Check>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="result-div">
        <p>Results go here</p>
        <p id="results"></p>
      </div>
    </div>
  );
}

export { TextSanitizer };
