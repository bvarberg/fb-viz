import { parseArgs } from "@std/cli/parse-args";
import { init } from "./app.ts";

export interface RunArgs {
  args: string[];
  getEnv: (key: string) => string | undefined;
}

export async function run({ args, getEnv }: RunArgs) {
  const flags = parseArgs(args);
  const port = parseInt(flags.port ?? getEnv("PORT") ?? "3000");

  const abortController = new AbortController();
  Deno.addSignalListener("SIGINT", () => {
    console.warn();
    console.warn("Interrupt signal received");
    console.info("Closing");
    abortController.abort();
  });

  const app = init();
  app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.info(
      `Listening on: ${secure ? "https://" : "http://"}${
        hostname ?? "localhost"
      }:${port}`,
    );
  });
  app.addEventListener("close", () => {
    console.info("Closed");
  });

  await app.listen({
    port,
    signal: abortController.signal,
  });
}
