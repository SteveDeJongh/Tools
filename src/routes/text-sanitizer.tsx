import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowCaseTS } from "../components/projects/ProjectShowCaseTS";

export const Route = createFileRoute("/text-sanitizer")({
  component: ProjectShowCaseTS,
});
