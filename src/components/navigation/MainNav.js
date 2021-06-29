import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationWrapper = styled.header`
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid gainsboro;
  padding: 20px 0;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.black};

  .brand {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  a {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.7;
    ${({ theme }) => theme.transition}

    &.active{
      opacity: 9;
    }

    &:hover {
      opacity: 1;
      ${({ theme }) => theme.transition}
    }
  }

  ul {
    display: flex;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 2em;
      }
    }
  }
`;

const MainNav = () => {
  return (
    <NavigationWrapper>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="brand">
            <Link to="/">SHOP</Link>
          </div>
          <ul className="nav-list">
            <li>
              <NavLink to="/category">Featured</NavLink>
            </li>
            <li>
              <NavLink to="/category">Men</NavLink>
            </li>
            <li>
              <NavLink to="/category">Women</NavLink>
            </li>
            <li>
              <NavLink to="/category">Kids</NavLink>
            </li>
          </ul>
          <ul className="user-actions">
            <li>
              <NavLink to="/cart">
                <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <FontAwesomeIcon icon={['far', 'user']} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavigationWrapper>
  );
};

export default MainNav;
