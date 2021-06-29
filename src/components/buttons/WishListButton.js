import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_to_wishList, remove_from_wishList } from '../../redux';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WishListButtonWrapper = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25em;
  width: 2.25em;
  padding: 0;
  border: 0;
  outline: 0 !important;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.transition};

  &:hover{
    background-color: ${({ theme }) => theme.color.grey};
  }

  ${({isSelected}) => isSelected && css`
    background-color: ${({ theme }) => theme.color.primary};

    &:hover{
      background-color: ${({ theme }) => theme.color.primary};
    }
  `}

  ${({isInline}) => isInline && css`
    position: static;
  `}
`;

const WishListButton = ({isSelected, isInline, id}) => {

  const dispatch = useDispatch();
  const wishList = useSelector(state => state.wishList);

  const updateActive = () => wishList.list.includes(id) ? dispatch(remove_from_wishList({id: id})) : dispatch(add_to_wishList({id: id}));

  return(
    <WishListButtonWrapper 
      isSelected={wishList.list.includes(id)} 
      isInline={isInline}
      onClick={() => updateActive()}
    >
      <FontAwesomeIcon icon={['far', 'heart']} />
    </WishListButtonWrapper>
  )
}

export default WishListButton;