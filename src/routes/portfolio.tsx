import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowCaseP } from "../components/projects/ProjectShowCaseP";

export const Route = createFileRoute("/portfolio")({
  component: ProjectShowCaseP,
});
