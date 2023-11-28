import styled, { css } from "styled-components";
import { headerHeight } from "@/constants/theme.ts";

const CategoriesStyled = {
  Container: styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    height: calc(100vh - ${headerHeight});
    background: ${({ theme }) => theme.colors.backgroundColor};
    box-shadow: 5px 5px 10px rgba(101, 108, 114, 0.12);
  `,

  Contents: styled.div<{ isCategoryOpen: boolean }>`
    ${(props) => {
      if (props.isCategoryOpen) {
        return css`
          visibility: visible;
          opacity: 1;
          width: 240px;
          padding: 40px;
        `;
      } else {
        return css`
          visibility: hidden;
          opacity: 0;
          width: 0;
          padding: 40px 0;
        `;
      }
    }};

    transition: 0.25s;
    position: relative;
    overflow: hidden;
  `,

  ToggleCategoryButton: styled.button`
    position: absolute;
    top: 40px;
    right: -40px;
    width: 40px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 0 30px 30px 0;
    box-shadow: 5px 0 12px rgba(101, 108, 114, 0.2);

    svg {
      stroke: ${({ theme }) => theme.colors.textColor};
    }
  `,

  SideBarTitle: styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayColor};
    margin-bottom: 25px;
  `,

  CategoryItem: styled.div<{ isFirst: boolean }>`
    ${(props) => {
      if (!props.isFirst) {
        return css`
          margin: 18px 0 18px 16px;
        `;
      } else {
        return css`
          margin-bottom: 30px;
        `;
      }
    }};
  `,

  CategoryTitle: styled.h3<{ isFirst: boolean }>`
    ${({ isFirst }) => {
      if (isFirst) {
        return css`
          font-size: 19px;
          font-weight: 600;
        `;
      } else {
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      }
    }};

    color: ${({ theme }) => theme.colors.textColor};
  `
};

export default CategoriesStyled;
