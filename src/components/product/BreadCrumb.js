import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbWrapper = styled.div`
  

  >*{
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    &:not(:last-child){
      color: ${({ theme }) => theme.color.grey};
      margin-right: 1em;
    }
  }
`;

const BreadCrumb = ({className}) => {
  return (
    <BreadCrumbWrapper className={className}>
      <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
      <span>/</span>
      <Link to="/category">Men's Tops</Link>
      <span>/</span>
      <Link to="/category">T-Shirt</Link>
      <span>/</span>
      <span>T-Shirt White Summer Vibes</span>
    </BreadCrumbWrapper>
  );
};

export default BreadCrumb;
