import { Validation, validationForm } from "utilits";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Input, LabelName, Label, ErrorMessage, Button, Title } from "./style";
import { resetUserPassword } from "store";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";

type Inputs = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export const FormResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.account);
  const [isEmail, setIsEmail] = useState<Boolean>(true);

  const handleEmail: SubmitHandler<Inputs> = ({ email }) => {
    dispatch(resetUserPassword({ email }));
  };

  const handleResetPassword: SubmitHandler<Inputs> = () => {
    navigate(PAGE.HOME);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onSubmit" });

  useEffect(() => {
    error ? setIsEmail(false) : setIsEmail(true);
  }, [error, dispatch]);

  return isEmail ? (
    <Form onSubmit={handleSubmit(handleEmail)}>
      <Label>
        <LabelName>Email</LabelName>
        <Input
          placeholder="Your email"
          type="email"
          {...register("email", validationForm(Validation.EMAIL))}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>
      <Button type="submit" disabled={!isValid}>
        Sign up
      </Button>
    </Form>
  ) : (
    <Form onSubmit={handleSubmit(handleResetPassword)}>
      <Title>Your password has been lost. A new password has been sent to your email</Title>
      <Button type="submit">Go to main page</Button>
    </Form>
  );
};
