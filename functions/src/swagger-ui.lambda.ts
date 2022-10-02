import serverlessExpress from "@vendia/serverless-express";
// @ts-ignore
import express from "express";
import * as swaggerUi from "swagger-ui-express";

const app = express();
const router = express.Router();

const options: swaggerUi.SwaggerUiOptions = {
  swaggerOptions: {
    url: "../api-docs.json",
  },
};

router.use("/", swaggerUi.serve);
router.get("/swagger-ui.html", swaggerUi.setup(undefined, options));

app.use("/", router);

exports.handler = serverlessExpress({ app });
