import { useForm } from "react-hook-form";
import { PAGE } from "../../router";
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
} from "./style";

export const FormRegistration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <StyledFrom>
      <TitleForm>Sign Up</TitleForm>
      <Label>
        <LabelName>Name</LabelName>
        <Input placeholder="Your name" {...register("firstName")} />
      </Label>
      <Label>
        <LabelName>Email</LabelName>
        <Input placeholder="Your email" {...register("firstName")} />
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input placeholder="Your password" {...register("firstName")} />
      </Label>
      <Label>
        <LabelName>Confirm password</LabelName>
        <Input placeholder="Confirm password" {...register("firstName")} />
      </Label>
      <Button type="submit">Sign up</Button>
      <ChangeForm>
        <SubText>Already have an account?</SubText>
        <LinkSignUp to={PAGE.AUTHORIZATION}>Sign In</LinkSignUp>
      </ChangeForm>
    </StyledFrom>
  );
};
