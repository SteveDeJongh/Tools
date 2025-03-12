import { PROJECTS } from "../../assets/projectDetails";
import { ProjectExplanation } from "./ShowCaseComponents/ProjectExplanation";
import { ProjectQuickHits } from "./ShowCaseComponents/ProjectQuickHits";

const CM = PROJECTS[0];

function ProjectShowCaseP() {
  return (
    <>
      <ProjectQuickHits project={CM} />
      <ProjectExplanation project={CM} />
    </>
  );
}

export { ProjectShowCaseP };
