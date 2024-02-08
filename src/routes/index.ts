import { Application, Router } from "express";
import { UserRouter } from "./user.route";

const _routes: Array<[string, Router]> = [["/user", UserRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(`/api${url}`, router);
  });
};
