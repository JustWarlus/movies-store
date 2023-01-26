import { KeyTypeInput } from "./types";
import { typeInput } from "./validationType";

export const validationForm = (type: KeyTypeInput) => {
  return typeInput[type];
};
