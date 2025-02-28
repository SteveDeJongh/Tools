import textLogo from "./icons/typewriter_15542341.png";
import contactsLogo from "./icons/contact-book_18820200.png";
import cashLogo from "./icons/cash-register_11209488.png";

type Project = {
  title: string;
  subTitle: string;
  image: string;
  text: string;
  path: string;
  tags: string[];
  description: string;
  why: string;
  type: string;
  stack: string;
  linkTo: string;
  largeImg: string;
  lessons: string;
}

const PROJECTS: Project[] = [
  {
    title: "Text Sanitizer",
    subTitle: "Personal Project",
    image: textLogo,
    text: `Text processing App for turning Iconnect "Mail Deliverable Bikes" reports into ready to use email content.`,
    path: "/text-sanitizer",
    tags: ["JavaScript", "TypeScript", "React", "React-hook-form"],
    description: "",
    why: "",
    type: "",
    stack: "",
    linkTo: "",
    largeImg: "",
    lessons: "",
  },
  {
    title: "Contact Manager",
    subTitle: "Personal Project",
    image: contactsLogo,
    text: "A simple CRUD based contact manager application.",
    path: "/contacts-manager",
    tags: ["JavaScript", "HTML", "CSS", "MORETODO"],
    description: "",
    why: "",
    type: "",
    stack: "",
    linkTo: "",
    largeImg: "",
    lessons: "",
  },
  {
    title: "WorkOrder",
    subTitle: "Personal Project",
    image: cashLogo,
    text: "A bare bones POS system to manage Products, Customers, and Invoicing.",
    path: "/workorder",
    tags: [
      "Retail POS",
      "Ruby",
      "Ruby on Rails",
      "React",
      "TypeScript",
      "Tanstack Query",
      "Tanstack Table",
    ],
    description: "",
    why: "",
    type: "",
    stack: "",
    linkTo: "",
    largeImg: "",
    lessons: "",
  },
];

export { PROJECTS }