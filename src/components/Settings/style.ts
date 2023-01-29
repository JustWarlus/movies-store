import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, input, Typography } from "ui";

interface ISwitch {
  $isDarkMode: boolean;
}

const StyledSettings = styled.div``;
const Form = styled.form``;
const SettingsBlock = styled.div`
  padding: 15px 40px 40px 40px;
  box-sizing: border-box;
  background: ${Color.DARK};
  border-radius: 10px;
  margin-bottom: 40px;
`;

const SettingsBlockName = styled.div`
  color: ${Color.WHITE};
  ${Typography.H2}
  margin-bottom: 16px;
`;

const SettingBlockInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
`;

const Label = styled.label`
  width: 100%;
  display: block;
`;

const InputName = styled.span`
  margin-top: 25px;
  color: ${Color.WHITE};
  display: block;
  margin-bottom: 8px;
  ${Typography.SUBLINE_BUTTON}
`;

const Input = styled.input`
  color: ${Color.WHITE};
  width: 100%;
  ${input}
`;

const Description = styled.span`
  color: ${Color.SECONDARY};
  display: block;
  margin-bottom: 8px;
  ${Typography.SUBLINE_BUTTON}
`;

const TextBlock = styled.div``;
const SettingsColorMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px 40px 40px;
  box-sizing: border-box;
  background: ${Color.DARK};
  border-radius: 10px;
`;

const Switch = styled.div<ISwitch>`
  width: 45px;
  height: 15px;
  margin-top: 15px;
  background-color: ${Color.GRAPHITE};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;

  ${({ $isDarkMode }) =>
    $isDarkMode &&
    `justify-content: flex-end;
    background-color: ${Color.PRIMARY_SUB}`}
`;
const SwitchHandle = styled(motion.div)`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 40px;
`;

const Controler = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
`;
const Button = styled.button`
  width: 23%;
  color: ${Color.WHITE};
  border: none;
  padding: 16px 0;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  ${Typography.SUBLINE_BUTTON}
  &:first-child {
    background: ${Color.GRAPHITE};
  }
  &:last-child {
    background: ${Color.PRIMARY_SUB};
    &:hover {
      background: ${Color.PRIMARY_MAIN};
    }
  }
`;

export {
  Form,
  StyledSettings,
  SettingsBlock,
  SettingsBlockName,
  SettingBlockInputs,
  Label,
  InputName,
  Input,
  Description,
  TextBlock,
  SettingsColorMode,
  SwitchHandle,
  Switch,
  Controler,
  Button,
};
