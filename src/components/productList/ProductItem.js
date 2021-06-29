import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';
import WishListButton from "../buttons/WishListButton"

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .product-info{
    flex: 1;
  }
  
  figure {
    position: relative;
    background-color: ${({theme}) => theme.color.grey};
  }

  .name {
    a {
      color: ${({ theme }) => theme.color.black};
    }
  }

  .price {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const ProductItem = ({ product }) => {
  return (
    <ProductItemWrapper className="col-6 col-md-4 mb-5">
      <div className="product-info">
        <figure className="mb-4">
          <img src={product.images[0].url} alt="Placeholder" />
          <WishListButton id={product.id} />
        </figure>
        <p className="name mb-3">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </p>
      </div>
      <p className="price">
        <span className="text-danger mr-4">
          <CurrencyFormat 
            value={product.price - (product.price * 0.1)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'₦'} 
          />
        </span>  
        <s className="text-color-light">
          <CurrencyFormat 
            value={product.price} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'₦'} 
          />
        </s> 
      </p>
    </ProductItemWrapper>
  );
};

export default ProductItem;
