import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    max-width: 540px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.desktop}) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.widescreen}) {
    max-width: 1140px;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
export default Container;
