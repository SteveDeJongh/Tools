import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowCaseWO } from "../components/projects/ProjectShowCaseWO";

export const Route = createFileRoute("/workorder")({
  component: ProjectShowCaseWO,
});
