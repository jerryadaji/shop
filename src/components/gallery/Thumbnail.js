import React from 'react';
import styled, {css} from 'styled-components';

const ImageWrapper = styled.figure`
  display: inline-flex;
  padding: 0.5em;
  width: 25%;
  height: 6rem;
  border: 1px solid transparent;
  cursor: pointer;
  ${({theme}) => theme.transition};

  @media (min-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: flex;
    width: 100%;
    padding: 10%;
    margin-bottom: 5%;
  }

  &:hover{
    border-color: ${({theme}) => theme.color.grey};
    ${({theme}) => theme.transition};
  }

  ${({isSelected}) => isSelected && css`
    border-color: ${({theme}) => theme.color.black};

    &:hover{
      border-color: ${({theme}) => theme.color.black};
    }
  `}

  &:after{
    flex: 1;
    content: "";
    background-color: ${({theme}) => theme.color.grey};
    background-image: url('${({background}) => background}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
  }
`;

const Thumbnail = ({background, isSelected, onClick}) => {
  return(
    <ImageWrapper background={background} isSelected={isSelected} onClick={onClick}/>
  )
}

export default Thumbnail;