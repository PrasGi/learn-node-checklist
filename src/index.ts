import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: Number = 4000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    data: "hello world",
  });
});

app.listen(port, () => console.log("server listening on port " + port));
