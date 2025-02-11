import React from "react";
import "./textSanitizer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  text: string;
  N30: boolean;
  "30/60/90": boolean;
  Spring: boolean;
  removeyear: boolean;
  removesize: boolean;
  checkfreight: boolean;
  type: "bike" | "component";
};

type PaymentTerm = {
  name: string;
  min: number;
  enabled: boolean;
};

const BIKETERMS: PaymentTerm[] = [
  { name: "Spring", min: 10000, enabled: false },
  { name: "30/60/90", min: 5000, enabled: true },
  { name: "N30", min: 0, enabled: true },
];

// const COMPONENTTERMS: PaymentTerm[] = [
//   { name: "N30", min: 0, enabled: true },
//   { name: "N60", min: 500, enabled: true },
//   { name: "N90", min: 1000, enabled: true },
// ];

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

function returnText(data) {
  let t = data.text.split("\n\n");
  let bikes = t[2].split("\n");
  let cleanLines = cleanBikeLines(bikes, data.removesize, data.removeyear);
  let { total, bikeQty } = orderTotals(data, t[3].split("\n"));
  let terms = determineTerms(data, total);
  let freightEligible = determineFreight(data, bikeQty);
  console.log(cleanLines, total, bikeQty, terms, freightEligible);
  let text = formatOutputText(
    cleanLines,
    total,
    bikeQty,
    terms,
    freightEligible
  );

  return text.join("\n\n");
}

function formatOutputText(cleanLines, total, bikeQty, terms, freightEligible) {
  let textLines = [];
  textLines.push("Available to ship: ");
  cleanLines.forEach((line) => {
    textLines.push(line);
  });

  let summaryLine = `${bikeQty} ${bikeQty >= 2 ? "pieces" : "piece"} for ${total} ${terms} ${freightEligible}`;

  textLines.push(summaryLine);
  return textLines;
}

function determineFreight(data, qty) {
  if (data.checkfreight) {
    return qty >= 6 ? "and eligible for freight rebate." : "";
  }
  return "";
}

function determineTerms(data, total) {
  let msg = "";
  BIKETERMS.some((term) => {
    if (data[term.name]) {
      console.log("term is allowed", term.name);
      if (total >= term.min) {
        msg = `on ${term.name} terms`;
        return total >= term.min;
      }
    }
  });
  return msg;
}

function orderTotals(data, totalLines) {
  const total = parseFloat(totalLines[2].match(/[+-]?\d+(\.\d+)?/g)[0]);
  const bikeQty = parseFloat(totalLines[4].match(/\d+(\.\d+)?/)[0]);
  return { total, bikeQty };
}

function cleanBikeLines(lines, size, year) {
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

export const TextSanitizer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit<SubmitHandler>(data) {
    console.log("Submitting!", data);
    const text = returnText(data);
    let resultArea = document.getElementById("results");
    resultArea.textContent = text;
    console.log(resultArea);
  }
  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formTextInput">
          <Form.Label>Mail Delivery Bikes Text Sanitizer</Form.Label>
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
            // name="type"
            value={"bike"}
            defaultChecked={true}
            {...register("type")}
          />
          <Form.Check
            type="radio"
            label="Component"
            id="component"
            // name="type"
            value={"component"}
            {...register("type")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bike Shipment Terms</Form.Label>
          <div className="switch-container">
            {BIKETERMS.map((term) => (
              <div key={`default-${term.name}`} className="mb-3">
                <Form.Check
                  type={"switch"}
                  // id={term.name}
                  label={term.name}
                  defaultChecked={term.enabled}
                  {...register(`${term.name}` as keyof Inputs)}
                />
              </div>
            ))}
          </div>
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Component Shipment Terms</Form.Label>
          <div className="switch-container">
            {COMPONENTTERMS.map((term) => (
              <div key={`default-${term.name}`} className="mb-3">
                <Form.Check
                  type={"switch"}
                  id={term.name}
                  label={term.name}
                  checked={term.enabled}
                />
              </div>
            ))}
          </div>
        </Form.Group> */}

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
            {...register("removesize")}
          ></Form.Check>
          <Form.Check
            type="checkbox"
            id="checkFreigth"
            label="Check Freight Eligibility?"
            defaultChecked={true}
            {...register("checkfreight")}
          ></Form.Check>
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Control type="submit"></Form.Control>
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* <div className="div">
        Placeholder
        {YEARS}
        {SIZES}
      </div> */}
      <div className="result-div">
        <p>Results go here</p>
        <p id="results"></p>
      </div>
    </div>
  );
};
