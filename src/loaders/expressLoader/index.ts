import { Express, urlencoded, json } from "express";
import cors from "cors";
import helmet from "helmet";
import { appErrorHandler } from "../../api/middleware/errorHandler";
import { apiTokenInterceptor } from "../../api/middleware/applicationTokenInterceptor";
import { router } from "../../api/routes";

function expressLoader(app: Express) {
  app.use(cors());
  app.use(helmet());
  app.use(apiTokenInterceptor);

  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(router);
  app.use(appErrorHandler);
}
export { expressLoader };
