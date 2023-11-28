import { NavLink } from "react-router-dom";
import S from "./Header.styled.tsx";
import { LNB } from "@/constants/common.ts";
import { LnbMenu } from "@/types/common.type.ts";
// import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";

/**
 * @title Global Header Component
 * @returns
 */
function Header() {
  return (
    <S.HeaderContainer>
      <S.InnerHeader>
        {/* Logo */}
        <S.Logo>HEEAE😎</S.Logo>

        {/* LNB */}
        <S.Lnb>
          {LNB.map((menu: LnbMenu) => (
            <li>
              <NavLink to={menu.link} key={menu.name}>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </S.Lnb>

        {/* GNB */}
        <S.Gnb>
          {/*<li>*/}
          {/*  <AiFillMail size={24} color={"#000"} />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <AiFillGithub size={24} color={"#000"} />*/}
          {/*</li>*/}
          <li>
            <HiMoon size={28} color={"#000"} />
            <HiSun size={28} color={"#000"} />
          </li>
        </S.Gnb>
      </S.InnerHeader>
    </S.HeaderContainer>
  );
}

export default Header;
