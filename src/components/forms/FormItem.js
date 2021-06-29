import React from "react";
import styled from "styled-components";

const FormItemWrapper = styled.div`
  display: inline-flex;
  color: ${({ theme }) => theme.color.black};
  padding: 1em 1.5em;
  border-radius: 2em;
  border: 1px solid ${({ theme }) => theme.color.grey};
  overflow: hidden;

  input{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
  }

  svg{
    margin-left: 1em;
  }
`;

const FormItem = ({ children }) => {
  return <FormItemWrapper>{children}</FormItemWrapper>;
};

export default FormItem;
