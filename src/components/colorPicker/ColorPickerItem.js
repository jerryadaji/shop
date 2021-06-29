import React from 'react'
import styled, {css} from 'styled-components';

const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  ${({theme}) => theme.transition};

  &:not(:last-child){
    margin-right: 0.5rem;
  }

  &:after {
    content: "";
    width: 60%;
    height: 60%;
    background-color: ${({color}) => color };
    border: 1px solid ${({theme}) => theme.color.grey };
    border-radius: 4px;
  }

  &:hover{
    border-color: ${({theme}) => theme.color.grey };
    ${({theme}) => theme.transition};
  }

  ${({isSelected}) => isSelected && css `
    border-color: ${({theme}) => theme.color.black };

    &:hover{
      border-color: ${({theme}) => theme.color.black };
    }
  `}
`;

const ColorPickerItem = ({color, isSelected, onClick}) => {
  return(
    <Color color={color} isSelected={isSelected} onClick={onClick}/>
  )
}

export default ColorPickerItem;