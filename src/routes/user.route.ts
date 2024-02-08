import { Router } from "express";
import UserController from "../controllers/user.controllers";

export const UserRouter: Router = Router();

UserRouter.get("/", UserController.index);
UserRouter.get("/:name", UserController.show);
UserRouter.post("/", UserController.create);
