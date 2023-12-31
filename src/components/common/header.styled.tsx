import styled from "styled-components";
import { headerHeight } from "@/constants/theme.ts";

const HeaderStyled = {
  HeaderContainer: styled.header`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 0 5px 10px rgba(101, 108, 114, 0.12);
    background: ${({ theme }) => theme.colors.backgroundColor};
  `,

  InnerHeader: styled.div`
    height: ${headerHeight};
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled.h1`
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textColor};
  `,

  Lnb: styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 2.5vw;

    li {
      font-size: 17px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textColor};

      // 메뉴가 액티브 됐을 때
      .active {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  `,

  Gnb: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  DarkModeButton: styled.button`
    transition: 0.3s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
  `
};

export default HeaderStyled;
