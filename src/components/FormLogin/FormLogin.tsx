import { useForm } from "react-hook-form";
import { PAGE } from "../../router";
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
} from "./style";

export const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <StyledFrom>
      <TitleForm>Sign In</TitleForm>
      <Label>
        <LabelName>Email</LabelName>
        <Input placeholder="Your email" {...register("firstName")} />
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input placeholder="Your password" {...register("firstName")} />
      </Label>
      <ForgetPassword to={PAGE.CHANGE_PASSWORD}>Forgot password?</ForgetPassword>
      <Button type="submit">Sign in</Button>
      <ChangeForm>
        <SubText>Don’t have an account?</SubText>
        <LinkSignUp to={PAGE.REGISTRATION}>Sign Up</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
