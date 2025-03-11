import { PROJECTS } from "../../assets/projectDetails";
import { ProjectExplanation } from "./ShowCaseComponents/ProjectExplanation";
import { ProjectQuickHits } from "./ShowCaseComponents/ProjectQuickHits";

const CM = PROJECTS[3];

function ProjectShowCaseWO() {
  return (
    <>
      <ProjectQuickHits project={CM} />
      <ProjectExplanation project={CM} />
    </>
  );
}

export { ProjectShowCaseWO };
