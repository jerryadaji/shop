import React from "react";
import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  padding: 1em 2.5em;
  border: 1px solid transparent;
  outline: none !important;
  border-radius: 2em;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    ${({ theme }) => theme.transition}
  }

  ${({ type }) =>
    type === "primary" &&
    css`
      color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color[type]};
      border-color: ${({ theme }) => theme.color[type]};

      &:hover {
        background-color: ${({ theme }) => theme.color.primaryHover};
      }
    `};

  ${({ type }) =>
    type === "secondary" &&
    css`
      color: ${({ theme }) => theme.color.black};
      border-color: ${({ theme }) => theme.color.grey};

      &:hover {
        background-color: ${({ theme }) => theme.color.grey};
      }
    `};

  ${({ theme }) => theme.transition}
`;

const Button = ({ title, type, onClick, className }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick} className={className}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;
