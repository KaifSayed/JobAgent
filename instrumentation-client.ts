import posthog from "posthog-js";
import { initPostHog } from "@/lib/posthog-client";

try {
  initPostHog();
} catch (error) {
  console.error("[instrumentation-client]", error);
}

export function onRouterTransitionStart(url: string) {
  try {
    posthog.capture("$pageview", { $current_url: url });
  } catch (_) {}
}
