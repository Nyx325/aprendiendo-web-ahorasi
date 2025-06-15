import type { Request } from "express";

export interface CrudHttpController {
  add(request: Request): Promise<>;
}
