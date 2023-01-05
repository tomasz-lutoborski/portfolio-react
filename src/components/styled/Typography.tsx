import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";

export const Header = styled.h1`
  font-size: 1.6rem;
  margin-top: 0.3rem;
  margin-bottom: -0.2rem;
  font-weight: 700;
  text-transform: uppercase;

  @media ${devices.tablet} {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }
`;

export const Subheader = styled.h2`
  font-size: 0.8rem;
  margin: 0;
  font-weight: 700;

  @media ${devices.tablet} {
    font-size: 1rem;
  }
`;
