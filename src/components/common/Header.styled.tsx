import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContents = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Gnb = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Li = styled.li`
  font-size: 1rem;
  font-weight: 400;
`;
