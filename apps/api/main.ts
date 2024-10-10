import { run } from "./run.ts";

if (import.meta.main) {
  try {
    await run({ args: Deno.args, getEnv: Deno.env.get });
  } catch (err) {
    console.error(err);
    Deno.exit(1);
  }
}
