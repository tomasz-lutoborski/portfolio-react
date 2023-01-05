import MainTitle from "../MainTitle";
import MenuButton from "./MenuButton";
import { Bar } from "../styled/Layout";
import Toggle from "../Toggler";

export const MenuBar = ({
  theme,
  toggleTheme,
  toggleMenu,
}: {
  theme: string;
  toggleTheme: () => void;
  toggleMenu: () => void;
}) => {
  return (
    <Bar id="bar">
      <MenuButton theme={theme} toggleMenu={toggleMenu} />
      <MainTitle header="Portfolio" subheader="Tomasz Lutoborski" />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Bar>
  );
};
