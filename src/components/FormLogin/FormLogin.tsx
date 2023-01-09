import { useForm } from "react-hook-form";
import { PAGE } from "../../router";
import { useAppDispatch } from "hooks";
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
interface IFormValues {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormValues>({ mode: "onChange" });

  const onSubmit = (data: any) => console.log(data);
  const dispatch = useAppDispatch();

  return (
    <StyledFrom>
      <TitleForm>Sign In</TitleForm>
      <Label>
        <LabelName>Email</LabelName>
        <Input
          placeholder="Your email"
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
      <ForgetPassword to={PAGE.CHANGE_PASSWORD}>Forgot password?</ForgetPassword>
      <Button type="submit" disabled={!isValid}>
        Sign in
      </Button>
      <ChangeForm>
        <SubText>Don’t have an account?</SubText>
        <LinkSignUp to={PAGE.REGISTRATION}>Sign Up</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
