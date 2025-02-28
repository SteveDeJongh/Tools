import { createFileRoute } from "@tanstack/react-router";
import { About } from "../components/about/About";

export const Route = createFileRoute("/about")({
  component: About,
});
