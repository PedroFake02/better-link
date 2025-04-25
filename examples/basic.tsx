import React from "react";
import { NavLink, AdvancedNavLink } from "better-link";

export default function ExampleNavigation() {
  return (
    <div className="navigation-example">
      <h2>Basic NavLink Example</h2>
      <nav>
        <ul>
          <li>
            <NavLink href="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/contact"
              renderChildren={(isActive) => (
                <span style={{ color: isActive ? "blue" : "inherit" }}>
                  Contact {isActive && "(Current)"}
                </span>
              )}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <h2>Advanced NavLink Example</h2>
      <nav>
        <ul>
          <li>
            <AdvancedNavLink to="/" key="home">
              {({ isActive }) => (
                <span className={isActive ? "active-link" : "link"}>
                  Home {isActive && "(Current)"}
                </span>
              )}
            </AdvancedNavLink>
          </li>
          <li>
            <AdvancedNavLink to="/dashboard" key="dashboard">
              {({ isActive }) => (
                <span className={isActive ? "active-link" : "link"}>
                  Dashboard {isActive && "(Current)"}
                </span>
              )}
            </AdvancedNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
