import styled from "styled-components";
import { moonSvg, sunSvg } from "../assets/svgs";
import { devices } from "../utils/mediaQueries";

const Button = styled.div`
  border: ${({ theme }) => theme.shared.border[1]} solid
    ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.shared.borderRadius[1]};
  cursor: pointer;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Sun = styled.svg`
  height: auto;
  width: 1.5rem;
  transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: auto;
  width: 1.5rem;
  transition: all 0.7s linear;
`;

const Toggle = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path style={{ fill: "#F6C358" }} d={moonSvg} />
        </Moon>
      ) : (
        <Sun
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path style={{ fill: "#B57614" }} d={sunSvg} />
        </Sun>
      )}
    </Button>
  );
};

export default Toggle;
