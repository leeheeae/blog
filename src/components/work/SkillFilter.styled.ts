import styled from "styled-components";

export const WorkGridContainer = styled.div`
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

export const CategoriesContainer = styled.div`
  width: 100%;
`;

export const CategoriesItem = styled.div``;

export const ContentsTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 0.5rem;
`;

export const ContentsSubTitle = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textColor};
  opacity: 0.8;
`;

export const Categories = styled.ul`
  margin: 0.5rem 0 2rem;
  display: flex;
  gap: 0.8rem;
`;

export const Category = styled.li<{ $isActive: boolean }>`
  font-size: 0.94rem;
  font-weight: 500;
  padding: 0.3rem 1.2rem;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.6;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  user-select: none;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }
`;
