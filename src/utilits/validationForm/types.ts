export enum Validation {
  EMAIL = "email",
  NAME = "name",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
}

interface IPattern {
  value: RegExp;
  message: string;
}

interface IMinLength {
  value: number;
  message: string;
}

interface IMaxLength {
  value: number;
  message: string;
}

export interface ITypeInput {
  password: {
    required: string;
    pattern: IPattern;
    minLength?: IMinLength;
    maxLength?: IMaxLength;
  };
  confirmPassword: {
    required: string;
    pattern: IPattern;
    minLength?: IMinLength;
    maxLength?: IMaxLength;
  };
  email: {
    required: string;
    pattern: IPattern;
    minLength?: IMinLength;
    maxLength?: IMaxLength;
  };
  name: {
    required: string;
    pattern: IPattern;
    minLength?: IMinLength;
    maxLength?: IMaxLength;
  };
}

export type KeyTypeInput = keyof ITypeInput;
