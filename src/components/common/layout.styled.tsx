import styled from "styled-components";

const LayoutStyled = {
  Template: styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundColor};
  `,

  Container: styled.div`
    padding: 80px 0;
  `
};

export default LayoutStyled;
