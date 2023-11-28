import styled from "styled-components";

const HeaderStyled = {
  HeaderContainer: styled.header`
    position: relative;
    background: #fff;
    box-shadow: 0 6px 14px rgba(101, 108, 114, 0.2);
  `,

  InnerHeader: styled.div`
    height: 70px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Logo: styled.h1`
    font-size: 20px;
    font-weight: 800;
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
      color: #1a1a1a;

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
  `
};

export default HeaderStyled;
