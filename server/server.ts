import express from "express";
import next from "next";

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const app = express();
const nextApp = next({ dev: true });

(async () => {
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, () => {});
})();
