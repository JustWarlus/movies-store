import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setThemesDark, setThemesLight, updateUserEmail } from "store";
import {
  Form,
  SettingsBlock,
  StyledSettings,
  SettingsBlockName,
  SettingBlockInputs,
  Label,
  InputName,
  Input,
  Description,
  TextBlock,
  SettingsColorMode,
  SwitchHandle,
  Controler,
  Button,
  Switch,
} from "./style";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { Validation, validationForm } from "utilits";
import { getNameProfile } from "helpers";

interface ISettingsValues {
  userName: string;
  userEmail: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const Settings = () => {
  const { email, theme } = useAppSelector((state) => state.account);
  const name = email ? getNameProfile(email) : "";
  const [isDark, setisDark] = useState<boolean>(theme === "dark");
  const dispatch = useAppDispatch();
  const toggleSwitch = () => {
    isDark ? dispatch(setThemesLight()) : dispatch(setThemesDark());
    setisDark((isDark) => !isDark);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const { register, handleSubmit, setValue, getValues } = useForm<ISettingsValues>({
    mode: "onSubmit",
  });

  useEffect(() => {
    email && setValue("userEmail", email);
    setValue("userName", name);
  }, [email, name, setValue]);
  const changeInfoUser: SubmitHandler<ISettingsValues> = ({ userEmail }) => {
    dispatch(updateUserEmail({ userEmail }));
  };

  return (
    <StyledSettings>
      <Form onSubmit={handleSubmit(changeInfoUser)}>
        <SettingsBlockName>Profile</SettingsBlockName>
        <SettingsBlock>
          <SettingBlockInputs>
            <Label>
              <InputName>Name</InputName>
              <Input placeholder="Your name" type="text" {...register("userName")} />
            </Label>
            <Label>
              <InputName>Email</InputName>
              <Input
                placeholder="Your email"
                type="email"
                {...register("userEmail", validationForm(Validation.EMAIL))}
              />
            </Label>
          </SettingBlockInputs>
        </SettingsBlock>
        <SettingsBlockName>Password</SettingsBlockName>
        <SettingsBlock>
          <SettingBlockInputs>
            <Label>
              <InputName>Password</InputName>
              <Input
                placeholder="Your password"
                type="password"
                disabled={true}
                {...register("password", {
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
            </Label>
            <Label>
              <InputName>New password</InputName>
              <Input
                placeholder="Your password"
                type="password"
                disabled={true}
                {...register("newPassword", {
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
              <InputName>Confirm password</InputName>
              <Input
                placeholder="Confirm password"
                type="password"
                disabled={true}
                {...register("confirmPassword", {
                  pattern: {
                    value: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}/,
                    message: "The password must consist of Latin letters and Arabic numerals",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum length is 8 characters",
                  },
                  validate: (value) => {
                    const { newPassword } = getValues();
                    return newPassword === value || "Password doesn't match";
                  },
                })}
              />
            </Label>
          </SettingBlockInputs>
        </SettingsBlock>

        <SettingsBlockName>Color Mode</SettingsBlockName>
        <SettingsColorMode>
          <TextBlock>
            <InputName>{isDark ? "Dark" : "Light"}</InputName>
            <Description>Use {isDark ? "dark" : "light"} mode</Description>
          </TextBlock>
          <Switch $isDarkMode={isDark} onClick={toggleSwitch}>
            <SwitchHandle layout transition={spring} />
          </Switch>
        </SettingsColorMode>
        <Controler>
          <Button
            onClick={() => {
              if (email) setValue("userEmail", email);
              setValue("userName", name);
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Controler>
      </Form>
    </StyledSettings>
  );
};
