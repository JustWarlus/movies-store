import { useForm, SubmitHandler } from "react-hook-form";
import { PAGE } from "router";
import { useAppDispatch } from "store";
import {
  StyledFrom,
  TitleForm,
  Input,
  Button,
  Label,
  LabelName,
  ForgetPassword,
  ChangeForm,
  SubText,
  LinkSignUp,
  ErrorMessage,
} from "./style";
import { Validation, validationForm } from "utilits";
import { signInUser } from "store";
import { useNavigateAfterAuth } from "hooks";
interface IFormValues {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const dispatch = useAppDispatch();
  useNavigateAfterAuth(PAGE.HOME);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormValues> = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
  };

  return (
    <StyledFrom onSubmit={handleSubmit(onSubmit)}>
      <TitleForm>Sign In</TitleForm>
      <Label>
        <LabelName>Email</LabelName>
        <Input
          placeholder="Your email"
          type="email"
          {...register("email", validationForm(Validation.EMAIL))}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input
          placeholder="Your password"
          type="password"
          {...register("password", validationForm(Validation.PASSWORD))}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </Label>
      <ForgetPassword to={PAGE.HOME + PAGE.CHANGE_PASSWORD}>Forgot password?</ForgetPassword>
      <Button type="submit" disabled={!isValid}>
        Sign in
      </Button>
      <ChangeForm>
        <SubText>Don’t have an account?</SubText>
        <LinkSignUp to={PAGE.HOME + PAGE.REGISTRATION}>Sign Up</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
