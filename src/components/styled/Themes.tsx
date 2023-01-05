import { DefaultTheme } from "styled-components";

const shared = {
  space: [
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
    "12rem",
    "16rem",
    "24rem",
  ],
  border: ["1px", "2px", "4px", "8px"],
  borderRadius: ["5px", "10px", "15px", "20px"],
};

export const lightTheme: DefaultTheme = {
  shared,
  body: "#FBF1C7",
  text: "#282828",
  textHover: "#3C3836",
  barBackground: "#83A598",
  border: "#D65D0E",
  buttonBackground: "#689D6A",
  borderHover: "#AF3A03",
  menuBackground: "F2E5BC",
  iconFill: "#AF3A03",
  shadows: [
    "-2px 4px 10px 0 rgba(0, 0, 0, 0.2)",
    "0 0 20px 0 rgba(0, 0, 0, 0.2)",
  ],
};

export const darkTheme = {
  shared,
  body: "#282828",
  text: "#FBF1C7",
  textHover: "#EBDBB2",
  toggleBorder: "#6B8096",
  background: "#999",
  barBackground: "#076678",
  buttonBackground: "#689D6A",
  border: "#D65D0E",
  borderHover: "#FE8019",
  menuBackground: "#3c3836",
  iconFill: "#D65D0E",
  shadows: [
    "-2px 4px 10px 0 rgba(0, 0, 0, 0.8)",
    "0 0 20px 0 rgba(0, 0, 0, 0.8)",
  ],
};
