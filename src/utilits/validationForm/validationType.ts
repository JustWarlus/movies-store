import { ITypeInput } from "./types";

export const typeInput: ITypeInput = {
  password: {
    required: "Password is empty",
    pattern: {
      value: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}/,
      message: "The password must consist of Latin letters and Arabic numerals",
    },
    minLength: {
      value: 8,
      message: "Minimum length is 8 characters",
    },
  },

  confirmPassword: {
    required: "Password is empty",
    pattern: {
      value: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}/,
      message: "The password must consist of Latin letters and Arabic numerals",
    },
    minLength: {
      value: 8,
      message: "Minimum length is 8 characters",
    },
  },

  email: {
    required: "Email is empty",
    pattern: {
      value:
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Incorrect email",
    },
  },
  name: {
    required: "Login is empty",
    pattern: {
      value: /^[a-zA-ZА-ЯЁа-яё\s]*$/,
      message: "Incorrect login",
    },
    minLength: {
      value: 5,
      message: "Minimum length is 5 characters",
    },
    maxLength: {
      value: 25,
      message: "Maximum length is 25 characters",
    },
  },
};
