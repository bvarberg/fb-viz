import { Application } from "@oak/oak/application";
import { Router } from "@oak/oak/router";

/**
 * Initializes an application instance.
 */
export function init() {
  const app = new Application();

  const router = new Router();
  router.get("/", (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = "ok";
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
}
