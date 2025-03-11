import textLogo from "./icons/typewriter_15542341.png";
import contactsLogo from "./icons/contact-book_18820200.png";
import cashLogo from "./icons/cash-register_11209488.png";
import portfolio from "./icons/portfolio.png";

export type Project = {
  title: string;
  subTitle: string;
  image: string;
  text: string;
  path: string;
  tags: string[];
  description: string;
  why: string;
  stack: string;
  linkTo: string;
  largeImg: string;
  lessons: string;
  readTime: number;
}

const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    subTitle: "Personal Project",
    readTime: 2,
    image: portfolio,
    path: "/",
    linkTo: "/",
    largeImg: "",
    tags: [
      "React",
      "TypeScript",
      "Bootstrap",
      "React-Bootstrap",
      "tanstack-router",
      
    ],
    text: "A one stop shop to highlight all of my work and share some of my background.",
    description: "",
    why: "",
    stack: "",
    lessons: "",
  },
  {
    title: "Text Sanitizer",
    subTitle: "Personal Project",
    readTime: 3,
    image: textLogo,
    largeImg: "",
    path: "/text-sanitizer",
    tags: ["JavaScript", "TypeScript", "React", "React-hook-form"],
    linkTo: "/text-sanitizer-live",
    text: `The text processing App for turning Iconnect "Mail Deliverable Bikes" reports into ready to use email content.`,
    description: `The text sanitizer is a text processing App for turning work IConnect "Mail Deliverable Bikes" reports into ready to use email content. The goal of the project was to increase effeciency of a repetitive task.`,
    why: "A common repeatable task in my day to day workflow screemed for improvements to effeciency. Unable to directly modify the implementation of the generated report from our CRM software, I turned to manipulating the report itself. This report was being used to send lists of product that was available to ship from their orders. Common questions for these shipment were `What terms will I receive?` and `Does this qualify for a freight rebate?`, so in addition to cleaning the report of duplicated information, and I've implemented toggles to select currently offered terms, along with an optional check for freight eligibility. With the desired toggles selected, now simply copying and pasting in the generated report returns a ready for email list with all the necessary information.",
    stack: "The project runs on React, with all logic being implemented on the front end using TypeScript. I've used the React-hook-form library for the form handling, which enables watching the form inputs to correctly render which terms are avaible for each type of product.",
    lessons: "This was a great first <i>real-use</i> project. A relatively straight forward project to sink my teeth into making something that actually helps me in my day to day work. <p class='mt-3'>Initially, the project handled text selection and fetching the relevant parts by splitting the report based on certain criteria. However, in the end I leant on using Regular expression matches to better identifiy start and end points of the needed text to better handle variances that were possible from the input text.</p>",
  },
  {
    title: "Contact Manager",
    subTitle: "Personal Project",
    readTime: 5,
    image: contactsLogo,
    path: "/contact-manager",
    tags: ["JavaScript", "HTML", "CSS", "MORETODO"],
    linkTo: "",
    largeImg: "",
    text: "A simple CRUD based contact manager application.",
    description: "",
    why: "",
    stack: "",
    lessons: "",
  },
  {
    title: "WorkOrder",
    subTitle: "Personal Project",
    readTime: 5,
    image: cashLogo,
    path: "/workorder",
    linkTo: "",
    largeImg: "",
    tags: [
      "Ruby",
      "Ruby on Rails",
      "React",
      "TypeScript",
      "Tanstack Query",
      "Tanstack Table",
    ],
    text: "A bare bones POS system to manage Products, Customers, and Invoicing.",
    description: "",
    why: "",
    stack: "",
    lessons: "",
  },
];

export { PROJECTS }