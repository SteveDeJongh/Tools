import textLogo from "./icons/typewriter_15542341.png";
import contactsLogo from "./icons/contact-book_18820200.png";
import cashLogo from "./icons/cash-register_11209488.png";
import portfolio from "./icons/portfolio.png";
import exImgLrg from "./example-project-lrg.png";

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
  whatsNext?: string;
  readTime: number;
}

const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    subTitle: "Personal Project",
    readTime: 2,
    image: portfolio,
    path: "/portfolio",
    linkTo: "/",
    largeImg: exImgLrg,
    tags: [
      "React",
      "TypeScript",
      "Bootstrap",
      "React-Bootstrap",
      "Tanstack-router",
    ],
    text: "A one stop shop to highlight all of my work and share some of my background.",
    description: "My portfolio was built to be somewhere I can highlight my past work, tell my story, and a be a place to share my contact information.",
    why: "As I don't have a formal education through a nomral computer science degree, I've decided to lean more heavily on personal projects to help tell my story. This portfolio is just one avenue I'm able to share my experience and demonstrate my progression of becoming a software engineer. Through this site, I'm able to share live versions of my projects, and include my thoughts, notes, learings, and plans for the future of each.",
    stack: "The profolio runs a React front end, and I took the opportunity to dive into some other libraries like Tanstack-router, and Bootstrap/React-Bootstrap for styling.",
    lessons: "To do...",
  },
  {
    title: "Text Sanitizer",
    subTitle: "Personal Project",
    readTime: 3,
    image: textLogo,
    largeImg: exImgLrg,
    path: "/text-sanitizer",
    tags: ["JavaScript", "TypeScript", "React", "React-hook-form"],
    linkTo: "/text-sanitizer-live",
    text: `The text processing App for turning Iconnect "Mail Deliverable Bikes" reports into ready to use email content.`,
    description: `The text sanitizer is a text processing App for turning work IConnect "Mail Deliverable Bikes" reports into ready to use email content. The goal of the project was to increase effeciency of a repetitive task.`,
    why: "A common repeatable task in my day to day workflow screemed for improvements to effeciency. Unable to directly modify the implementation of the generated report from our CRM software, I turned to manipulating the report itself. This report was being used to send lists of product that was available to ship from their orders. Common questions for these shipment were `What terms will I receive?` and `Does this qualify for a freight rebate?`, so in addition to cleaning the report of duplicated information, and I've implemented toggles to select currently offered terms, along with an optional check for freight eligibility. With the desired toggles selected, now simply copying and pasting in the generated report returns a ready for email list with all the necessary information.",
    stack: "The project runs on React, with all logic being implemented on the front end using TypeScript. I've used the React-hook-form library for form handling, which enables watching form inputs in order to correctly render the terms that are avaible for each product type.",
    lessons: "This was a great first <i>real-use</i> project. A relatively straight forward project to sink my teeth into making something that actually helps me in my day to day work. <p class='mt-3'>Initially, the project handled text selection and fetching the relevant parts by splitting the report based on certain criteria. However, in the end I decided on switching to using Regular expression matchers to better identifiy start and end points of the required portions of text to better handle variances that were possible from the input text.</p>",
    whatsNext: "The project sits in a ready to use state, however in the future there are some additional features I'd like to add.<ul><li>Allow the user to add/remove eligible terms for each product type.</li><li>Enable a database to persist user created settings (customs terms, additional size monikers, etc)</li><li>Styling improvements</li></ul>"
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