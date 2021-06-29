import React from "react";
import css from "styled-components";

const TitleWrapper = css.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};

  @media (min-width: ${({ theme }) => theme.breakPoint.desktop}) {
    font-size: ${({theme}) => theme.fontSize.large};
  }
`;

const Title = ({children}) => {
  return <TitleWrapper className="mb-4">{children}</TitleWrapper>;
};

export default Title;
