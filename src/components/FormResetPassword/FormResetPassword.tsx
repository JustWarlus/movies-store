import { Validation, validationForm } from "utilits";
import { useAppDispatch } from "store/hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Input, LabelName, Label, ErrorMessage, Button } from "./style";
import { resetUserPassword } from "store/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormResetPassword = () => {
  const dispatch = useAppDispatch();

  const handleResetPassword: SubmitHandler<Inputs> = ({ email }) => {
    dispatch(resetUserPassword({ email }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  return (
    <Form onSubmit={handleSubmit(handleResetPassword)}>
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
  );
};
