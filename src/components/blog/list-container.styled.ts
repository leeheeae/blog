import styled from "styled-components";

const ListContainerStyled = {
  Container: styled.div`
    width: 100%;
    height: 1000px;
    padding: 80px 0;
  `,

  ListTitleWrap: styled.div`
    width: 100%;
    padding-bottom: 50px;
    border-bottom: 1px solid #e2e2e2;
  `,

  ListTileInnerWrap: styled.div`
    width: 100%;
    max-width: 1100px;
    margin: auto;
  `,

  ListTitleTop: styled.div``,

  ListTitle: styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textColor};

    span {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  `,

  ListDescription: styled.p`
    margin: 20px 0;
    max-width: 630px;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.grayColor};
  `,

  ListTitleBottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `,

  SearchInputWrap: styled.div`
    max-width: 630px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 18px;
    height: 42px;
    border: 1px solid #d2d2d2;
    border-radius: 24px;

    input {
      flex: 1;
      border: none;
      outline: none;
      margin: 0;
      padding: 0;
      font-size: 15px;
      font-family: inherit;
      color: ${({ theme }) => theme.colors.textColor};
      background: transparent;

      &::placeholder {
        color: #ababab;
      }
    }

    button {
      opacity: 0.8;

      svg {
        stroke: ${({ theme }) => theme.colors.textColor};
      }

      &:hover {
        opacity: 1;
      }
    }
  `,

  TotalCountWrap: styled.div`
    display: flex;
  `,

  TotalCountItem: styled.div`
    h4 {
      font-size: 14px;
      font-weight: 400;
      color: #acb7c1;
      margin-bottom: 6px;
    }

    p {
      font-size: 28px;
      font-weight: 600;
      color: #0a0a0a;
    }
  `,

  Line: styled.div`
    width: 1px;
    height: 50px;
    margin: 0 30px;
    background: #dfdfdf;
  `
};

export default ListContainerStyled;
