import { useForm, SubmitHandler } from "react-hook-form";
import { PAGE } from "../../router";
import { useAppDispatch } from "store/hooks/hooks";
import {
  StyledFrom,
  TitleForm,
  Input,
  Button,
  Label,
  LabelName,
  ChangeForm,
  SubText,
  LinkSignUp,
  ErrorMessage,
} from "./style";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormRegistration = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormValues> = (newUser) => {
    console.log(newUser);
  };

  return (
    <StyledFrom onSubmit={handleSubmit(onSubmit)}>
      <TitleForm>Sign Up</TitleForm>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="name"
          placeholder="Your name"
          {...register("name", {
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
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </Label>

      <Label>
        <LabelName>Email</LabelName>
        <Input
          placeholder="Your email"
          type="email"
          {...register("email", {
            required: "Email is empty",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Incorrect email",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input
          placeholder="Your password"
          type="password"
          {...register("password", {
            required: "Password is empty",
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}/,
              message: "The password must consist of Latin letters and Arabic numerals",
            },
            minLength: {
              value: 8,
              message: "Minimum length is 8 characters",
            },
          })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </Label>
      <Label>
        <LabelName>Confirm password</LabelName>
        <Input
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword", {
            required: "Password is empty",
            minLength: {
              value: 8,
              message: "Minimum length is 8 characters",
            },
            validate: (value) => {
              const { password } = getValues();
              return password === value || "Password doesn't match";
            },
          })}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
      </Label>
      <Button type="submit" disabled={!isValid}>
        Sign up
      </Button>
      <ChangeForm>
        <SubText>Already have an account?</SubText>
        <LinkSignUp to={PAGE.AUTHORIZATION}>Sign In</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
