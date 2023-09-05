import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  InnerContents,
  Gnb,
  Logo,
  Ul,
  Li,
} from "./Header.styled";

const GnbList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

/**
 * @title Global Header Component
 * @returns
 */
function Header() {
  return (
    <HeaderContainer>
      <InnerContents>
        {/* LOGO */}
        <Logo to={"/"}>HEEAE</Logo>

        {/* Global Navigation Bar */}
        <Gnb>
          <Ul>
            {GnbList.map((menu) => (
              <Li key={`menu-${menu.name}`}>
                <NavLink to={menu.link}>{menu.name}</NavLink>
              </Li>
            ))}
          </Ul>
        </Gnb>
      </InnerContents>
    </HeaderContainer>
  );
}

export default Header;
