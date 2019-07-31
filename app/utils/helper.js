import { Success } from "../exception/httpException";

export const handleResult = (data) => {
  throw new Success(data)
}