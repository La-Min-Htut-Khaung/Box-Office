import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];

  return (
    <div>
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
