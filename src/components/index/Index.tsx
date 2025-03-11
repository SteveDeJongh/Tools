import { Skills } from "../skills/Skills";
import { Jumbo } from "../jumbo/Jumbo";
import { ProjectCards } from "../projects/ProjectCards";
import { Contact } from "../contact/Contact";

export const Index = () => {
  return (
    <>
      <Jumbo />
      <Skills />
      <ProjectCards />
      <Contact />
    </>
  );
};
