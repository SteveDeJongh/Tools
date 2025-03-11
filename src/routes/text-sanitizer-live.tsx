import { createFileRoute } from "@tanstack/react-router";
import { TextSanitizer } from "../components/text-sanitizer/TextSanitizer";

export const Route = createFileRoute("/text-sanitizer-live")({
  component: TextSanitizer,
});
