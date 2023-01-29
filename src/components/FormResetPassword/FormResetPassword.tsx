import { Validation, validationForm } from "utilits";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Input, LabelName, Label, ErrorMessage, Button } from "./style";
import { resetUserPassword, updateUserPassword } from "store";

type Inputs = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};

export const FormResetPassword = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.account);
  const [isEmail, setIsEmail] = useState<Boolean>(false);

  const handleEmail: SubmitHandler<Inputs> = ({ email }) => {
    dispatch(resetUserPassword({ email }));
  };

  const handleResetPassword: SubmitHandler<Inputs> = ({ newPassword }) => {
    dispatch(updateUserPassword({ newPassword }));
  };

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onSubmit" });

  useEffect(() => {
    setIsEmail(Boolean(error));
    setValue("newPassword", "");
  }, [error, setValue]);

  return !isEmail ? (
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
      <Label>
        <LabelName>Password</LabelName>
        <Input
          placeholder="Your password"
          type="password"
          {...register("newPassword", validationForm(Validation.PASSWORD))}
        />
        {errors.newPassword && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
      </Label>
      <Label>
        <LabelName>Confirm password</LabelName>
        <Input
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword", {
            ...validationForm(Validation.CONFIRM_PASSWORD),
            validate: (value) => {
              const { newPassword } = getValues();
              return newPassword === value || "Password doesn't match";
            },
          })}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
      </Label>
      <Button type="submit" disabled={!isValid}>
        Sign up
      </Button>
    </Form>
  );
};
