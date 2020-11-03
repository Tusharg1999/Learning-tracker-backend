import { NextFunction, Response } from "express";
import AppResult, { ErrorResult } from "./appResult";


export function runCatching(
  block: (req: any, res: Response, next: NextFunction) => any
) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      return await block(req, res, next);
    } catch {
      return res.status(500).end();
    }
  };
}

export async function runCatchingWithResult<T>(
  block: () => Promise<AppResult<T>>
) {
  try {
    return await block();
  } catch (error) {
    return new ErrorResult(error);
  }
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function okay(res: Response, data: any) {
  return res.status(200).send({data:data});
}

export function created(res: Response) {
  return res.status(201).end();
}

export function noContent(res: Response) {
  return res.status(204).end();
}
