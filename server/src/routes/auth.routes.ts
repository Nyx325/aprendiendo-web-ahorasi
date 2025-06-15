import { Router } from "express";
import type { ApiErrorResponse, ApiFieldError } from "../model";

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  const errors: ApiFieldError[] = [];
  const { name, email, password } = req.body;

  if (name == undefined)
    errors.push({
      field: "name",
      error: "name required",
    });

  if (email == undefined)
    errors.push({
      field: "email",
      error: "email required",
    });

  if (password == undefined)
    password.push({
      field: "password",
      error: "password required",
    });
});

export default authRouter;
