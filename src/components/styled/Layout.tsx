import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";

export const Fullscreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Bar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.barBackground};
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media ${devices.tablet} {
    height: 4rem;
    padding: ${({ theme }) => theme.shared.space[0]};
  }

  @media ${devices.desktop} {
    height: 5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
