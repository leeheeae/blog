import styled from "styled-components";

// Styled
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
