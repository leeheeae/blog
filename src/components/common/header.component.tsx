import { NavLink } from "react-router-dom";
import S from "./header.styled.tsx";
import { LNB } from "@/constants/common.ts";
import { LnbMenu } from "@/types/common.type.ts";
// import { AiFillMail, AiFillGithub } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";
import { Colors } from "@/constants/theme.ts";
import useUiStore from "@/store/ui.store.ts";

/**
 * @title Global Header Component
 * @returns
 */
function Header() {
  const isDarkMode = useUiStore((state) => state.isDarkMode);
  const onToggleDarkMode = useUiStore((state) => state.onToggleDarkMode);

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
            <S.DarkModeButton onClick={onToggleDarkMode}>
              {isDarkMode ? <HiMoon size={28} color={Colors.yellow} /> : <HiSun size={28} color={Colors.red} />}
            </S.DarkModeButton>
          </li>
        </S.Gnb>
      </S.InnerHeader>
    </S.HeaderContainer>
  );
}

export default Header;
