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
import { Validation, validationForm } from "utilits";
import { signUpUser } from "store/auth/authSlice";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormRegistration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const handleSignUp: SubmitHandler<Inputs> = ({ email, password }) => {
    dispatch(signUpUser({ email, password }));
    navigate(PAGE.HOME);
  };

  return (
    <StyledFrom onSubmit={handleSubmit(handleSignUp)}>
      <TitleForm>Sign Up</TitleForm>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="name"
          placeholder="Your name"
          {...register("name", validationForm(Validation.NAME))}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </Label>

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
      <Label>
        <LabelName>Confirm password</LabelName>
        <Input
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword", {
            ...validationForm(Validation.CONFIRM_PASSWORD),
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
        <LinkSignUp to={"login"}>Sign In</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
