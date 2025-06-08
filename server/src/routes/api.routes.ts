import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/api/ping", (_, res) => {
  res.status(200).json("Ok");
});

export default apiRouter;
