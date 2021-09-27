import React from "react";
import { useLocation } from "react-router";
import { LinkStyled, NavList } from "./Nav.styled";

const Nav = () => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];

  const location = useLocation();
  console.log(location);

  return (
    <NavList>
      {LINKS.map((item) => (
        <li key={item.to}>
          <LinkStyled
            to={item.to}
            className={item.to === location.pathname ? "active" : ""}
          >
            {item.text}
          </LinkStyled>
        </li>
      ))}
    </NavList>
  );
};

export default Nav;
