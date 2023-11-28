import React from "react";
import S from "./layout.styled.tsx";
import Header from "@/components/common/header.component.tsx";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <S.Template>
      <Header />
      <S.Container>{children}</S.Container>
    </S.Template>
  );
}

export default Layout;
