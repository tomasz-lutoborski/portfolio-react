import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shared: SharedTheme;
    body: string;
    text: string;
    textHover: string;
    barBackground: string;
    border: string;
    buttonBackground: string;
    borderHover: string;
    menuBackground: string;
    iconFill: string;
    shadows: string[];
  }

  export interface SharedTheme {
    borderRadius: string[];
    space: string[];
    border: string[];
  }
}

// shared,
// body: "#FBF1C7",
// text: "#282828",
// textHover: "#3C3836",
// barBackground: "#83A598",
// border: "#D65D0E",
// buttonBackground: "#689D6A",
// borderHover: "#AF3A03",
// menuBackground: "F2E5BC",
// iconFill: "#AF3A03",
// shadows: [
//   "-2px 4px 10px 0 rgba(0, 0, 0, 0.2)",
//   "0 0 20px 0 rgba(0, 0, 0, 0.2)",
// ],
