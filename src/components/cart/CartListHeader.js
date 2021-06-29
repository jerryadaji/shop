import React from "react"
import styled from "styled-components"

const CartListHeaderWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.grey};
`;

const CartListHeader = () => {
  return(
    <CartListHeaderWrapper className="row mb-4">
      <div className="col col-md-4">Product</div>
      <div className="col col-md-2">Color</div>
      <div className="col col-md-1">Size</div>
      <div className="col col-md-2">Quantity</div>
      <div className="col col-md-2">Price</div>
    </CartListHeaderWrapper>
  )
}

export default CartListHeader