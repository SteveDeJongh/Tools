import { PROJECTS } from "../../assets/projectDetails";
import { ProjectExplanation } from "./ShowCaseComponents/ProjectExplanation";
import { ProjectQuickHits } from "./ShowCaseComponents/ProjectQuickHits";

const CM = PROJECTS[2];

function ProjectShowCaseCM() {
  return (
    <>
      <ProjectQuickHits project={CM} />
      <ProjectExplanation project={CM} />
    </>
  );
}

export { ProjectShowCaseCM };
