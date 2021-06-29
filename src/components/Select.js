import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:after{
    content: "";
    position: absolute;
    right: 1.5em;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25em;
    height: 1.25em;
    background-size: contain;
    background-image: url(${({theme}) => theme.svg.angleDown});
    pointer-events: none;
  }
  select{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    padding: 1em 3em 1em 2.5em;
    border: 1px solid ${({ theme }) => theme.color.grey};
    outline: none !important;
    border-radius: 2em;
    background-color: transparent;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    cursor: pointer;
  }
`;

const Select = ({children, className, callback}) => {
  return (
    <SelectWrapper className={className}>
      <select onChange={e => callback(e.target.value)}>{children}</select>
    </SelectWrapper>
  )
}

export default Select;