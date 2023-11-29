import styled from "styled-components";

const AddButtonStyled = {
  AddButton: styled.button`
    padding: 6px 16px;
    border-radius: 30px;
    position: fixed;
    bottom: 8vh;
    right: 4vw;
    display: flex;
    align-items: center;
    gap: 3px;
    box-shadow: 0 0 20px rgba(101, 108, 114, 0.3);
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(101, 108, 114, 0.5);
    }

    &:active {
      transform: translateY(3px);
    }

    svg {
      fill: ${({ theme }) => theme.colors.textColor};
    }
  `,

  AddButtonLabel: styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textColor};
  `
};

export default AddButtonStyled;
