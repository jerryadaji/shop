import React from 'react';
import styled from 'styled-components';

const FrameWrapper = styled.figure`
  position: relative;
  height: 500px;
  background-color: ${({theme}) => theme.color.grey};
  background-image: url('${({background}) => background}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({theme}) => theme.transition};

  @media (min-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.desktop}) {
    height: 500px;
  }
`;

const Frame = ({background}) => {
  return(
    <FrameWrapper background={background.url} />
  )
}

export default Frame;