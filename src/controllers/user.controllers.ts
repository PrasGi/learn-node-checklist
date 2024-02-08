import { Request, Response } from "express";
import { logger } from "../utils/logger";
import UserValidation from "../validation/user.validation";

const index = (req: Request, res: Response) => {
  logger.info("access user");
  res.status(200).json({
    status_code: 200,
    message: "success access user",
    data: null,
  });
};

const create = (req: Request, res: Response) => {
  const { error, value } = UserValidation.createUserValidation(req.body);
  if (error) {
    logger.error("user || create = " + error.message);
    return res.status(400).json({
      status_code: 400,
      message: "failed to create user",
      error: error.message,
    });
  }

  logger.info("create data user");
  res.status(200).json({
    status_code: 200,
    message: "success create data user",
    data: value,
  });
};

const show = (req: Request, res: Response) => {
  const params = req.params;

  logger.info("show user");
  res.status(200).json({
    status_code: 200,
    message: "success show user",
    data: params,
  });
};

export default { index, create, show };
