import express from "express";
import next from "next";
import colors from "colors";
import { graphqlHTTP } from "express-graphql";
// import root from "./graphql/root";

// Development Step Up
colors.enable();

// Environment variables
const mode = process.env.NODE_ENV === "development" ? true : false;
const PORT = process.env.PORT || 3000;

const app = express();
const nextApp = next({ dev: mode, dir: "." });

(async () => {
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();

  // app.get(
  //   "/graphql/",
  //   graphqlHTTP({
  //     graphiql: mode,
  //     schema: root,
  //   })
  // );

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`.yellow);
  });
})();
