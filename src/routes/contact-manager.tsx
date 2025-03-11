import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowCaseCM } from "../components/projects/ProjectShowCaseCM";

export const Route = createFileRoute("/contact-manager")({
  component: ProjectShowCaseCM,
});
