import styled from "styled-components";
import { menuButtonSvg } from "../../assets/svgs";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import PopupMenu from "../PopupMenu/PopupMenu";
import { devices } from "../../utils/mediaQueries";

const Icon = styled.svg`
  height: auto;
  width: 1.5rem;
  transition: all 0.7s linear;
`;

const Button = styled(motion.button)`
  border: ${({ theme }) => theme.shared.border[1]} solid
    ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.shared.borderRadius[1]};
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 100%;
  outline: none;
  transition: all 0.5s linear;
  :hover {
    border: 2px solid ${({ theme }) => theme.borderHover};
    background-color: ${({ theme }) => theme.textHover};
  }

  @media ${devices.tablet} {
    width: 6rem;
  }

  @media ${devices.desktop} {
    width: 8rem;
  }
`;
const MenuButtonContainer = styled(motion.nav)`
  /* margin-bottom: 10rem; */
`;

const MenuButton = ({
  theme,
  toggleMenu,
}: {
  theme: string;
  toggleMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuButtonContainer
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <PopupMenu />
      <Button
        onClick={() => {
          toggleMenu();
          setIsOpen(!isOpen);
        }}
      >
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          viewBox="0 0 80 80"
        >
          <path
            style={{ fill: theme !== "light" ? "#B57614" : "#F6C358" }}
            d={menuButtonSvg}
          />
        </Icon>
      </Button>
    </MenuButtonContainer>
  );
};
// const MenuButton = ({
//   theme,
//   toggleMenu,
// }: {
//   theme: string;
//   toggleMenu: () => void;
// }) => {
//   return (
//     <Button onClick={() => toggleMenu()}>
//       <Icon
//         xmlns="http://www.w3.org/2000/svg"
//         width="800"
//         height="800"
//         viewBox="0 0 80 80"
//       >
//         <path
//           style={{ fill: theme !== "light" ? "#B57614" : "#F6C358" }}
//           d={menuButtonSvg}
//         />
//       </Icon>
//     </Button>
//   );
// };

export default MenuButton;
