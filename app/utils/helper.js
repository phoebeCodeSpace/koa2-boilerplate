import { Success } from "../lib/exception";

export const handleResult = (data) => {
  throw new Success(data)
}