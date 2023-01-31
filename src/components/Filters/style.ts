import styled from "styled-components";
import { Color, input, Typography } from "ui";
import { CrossIcon } from "assets";
import { StylesConfig } from "react-select";
interface IInput {
  $isError?: boolean;
}

const StyledFilters = styled.div`
  padding: 40px;
  box-sizing: border-box;
  min-width: 518px;
  height: 100%;
  background: ${Color.DARK};
  position: fixed;
  overflow-y: scroll;
  right: 0;
  top: 0;
  @media (max-width: 520px) {
    min-width: 0;
    width: 100%;
  }
`;

const TopPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.span`
  color: ${Color.WHITE};
  ${Typography.H2};
`;
const Form = styled.form``;
const LabelSort = styled.label`
  display: block;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Color.GRAPHITE};
`;
const NameInput = styled.span`
  margin-bottom: 15px;
  ${Typography.H3};
  color: ${Color.WHITE};
  display: block;
`;
const Label = styled.label`
  display: block;
  margin-top: 25px;
`;
const Input = styled.input<IInput>`
  display: block;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${input};
  border: 2px solid ${({ $isError }) => ($isError ? Color.ERROR : Color.GRAPHITE)};
`;

const stylesSelect: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    padding: "6px",
    backgroundColor: `${Color.GRAPHITE}`,
    border: `2px solid ${Color.GRAPHITE}`,
    outline: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",

    ":hover": {
      border: `2px solid ${Color.GRAPHITE}`,
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "left",
    paddingLeft: "10px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "700",
    color: "#fff",
    opacity: "0.9",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    caretColor: "transparent",
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: "10px",
    backgroundColor: `${Color.GRAPHITE}`,
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "15px",
  }),
  option: (styles) => {
    return {
      ...styles,
      borderRadius: "10px",
      padding: "15px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      color: "#fff",

      ":hover": {
        backgroundColor: `${Color.WHITE}`,
        color: `${Color.GRAPHITE}`,
      },
    };
  },
};

const BlockInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
`;

const ControlePanel = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
const Button = styled.button`
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  color: ${Color.WHITE};
  border-radius: 10px;
  width: 100%;

  ${Typography.SUBLINE_BUTTON}
  &:first-child {
    background: ${Color.GRAPHITE};
  }
  &:last-child {
    background: ${Color.PRIMARY_SUB};
    &:disabled {
      background: ${Color.LIGHT};
    }
    &:hover {
      background: ${Color.PRIMARY_MAIN};
    }
  }
`;

const StylesCrossIcon = styled(CrossIcon)`
  cursor: pointer;
  &:hover {
    path {
      fill: ${Color.PRIMARY_SUB};
    }
  }
`;

const ControlSort = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 3px;
  box-sizing: border-box;
  background: ${Color.GRAPHITE};
  border-radius: 10px;
`;

interface ITabSortProps {
  $isActive: boolean;
}

const TabSort = styled.div<ITabSortProps>`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.WHITE};
  border-radius: 10px;
  background: ${({ $isActive }) => ($isActive ? Color.DARK : Color.GRAPHITE)};
  ${Typography.SUBLINE_SUB_PRIMARY};
`;

export {
  StyledFilters,
  TopPanel,
  StylesCrossIcon,
  Title,
  Form,
  LabelSort,
  NameInput,
  Label,
  Input,
  BlockInputs,
  ControlePanel,
  Button,
  ControlSort,
  TabSort,
  stylesSelect,
};
