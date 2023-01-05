import { motion } from "framer-motion";
import { ReactElement, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { devices } from "../../utils/mediaQueries";

const ItemContainer = styled(motion.li)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ItemText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-left: 0.5rem;

  @media ${devices.tablet} {
    font-size: 1.4rem;
    margin-left: 0.75rem;
  }
`;

const PopupMenuItem = ({
  Icon,
  title,
}: {
  Icon: JSX.Element;
  title: string;
}) => {
  return (
    <ItemContainer>
      {Icon} <ItemText>{title}</ItemText>
    </ItemContainer>
  );
};

export default PopupMenuItem;
