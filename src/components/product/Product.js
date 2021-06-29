import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux";
import CurrencyFormat from 'react-currency-format';
import BreadCrumb from "./BreadCrumb";
import Gallery from "../gallery/Gallery"
import Button from "../buttons/Button";
import Counter from "../Counter";
import ColorPicker from "../colorPicker/ColorPicker";
import Select from  '../Select';
import ProductList from "../productList/ProductsList";
import WishListButton from "../buttons/WishListButton";

const Product = ({ match }) => {
  const dispatch = useDispatch();

  // Get product
  const products = useSelector((state) => state.products.products);
  const product = products.find(
    (product) => product.id === parseInt(match.params.productId)
  );

  // Define State variables
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  // Update state variables
  const colorCallback = (value) => setColor(value);
  const sizeCallback = (value) => setSize(value);
  const quantityCallback = (value) => setQuantity(value);

  const addProductToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        orderId: "order" + product.id,
        selectedColor: color,
        selectedSize: size,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="container">
      <BreadCrumb className="mb-5" />
      <div className="row">
        <div className="col-lg-6 mb-5">
          <Gallery images={product.images} productId={product.id}/>
        </div>
        <div className="col-lg-6 pl-lg-5 mb-5">
          <h1 className="h3 font-weight-light mb-3">{product.name}</h1>
          <h2 className="h3 mb-4">
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
          </h2>
          <p className="mb-2">Color</p>
          <ColorPicker className="mb-4" colors={product.colors} callback={colorCallback}/>
          <p className="mb-2">Size</p>
          <Select className="mb-4" callback={sizeCallback}>
            {product.sizes.map((size, index) => <option key={index} value={size}>{size}</option>)}
          </Select>
          <p className="mb-2">Quantity</p>
          <Counter className="mb-4" value={quantity} callback={quantityCallback}/>
          <div>
            <Button
              type="primary"
              title="Add to Cart"
              className="mr-3"
              onClick={addProductToCart}
            />
            <WishListButton isInline id={product.id} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <article className="text-box mb-5">
            <h2>Product Details</h2>
            <p>Shirt by ASOS DESIGN</p>
            <ul>
              <li>Do the smart thing</li>
              <li>Plain design</li>
              <li>Grandad collar</li>
              <li>Button placket</li>
              <li>Short sleeves</li>
              <li>Skinny fit</li>
              <li>Tight cut</li>
            </ul>
            <h2>Brand</h2>
            <p>This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in Plus and Tall. Created by us, styled by you.</p>
            <h2>Size & Fit</h2>
            <p>Model's height: 189cm/6'2.5"</p>
            <p>Model is wearing: Size Medium</p>
            <h2>LOOK AFTER ME</h2>
            <p>Machine wash according to instructions on care label</p>
            <h2>ABOUT ME</h2>
            <p>Plain-woven fabric</p>
            <p>Lightweight feel</p>
            <p>Main: 100% Viscose.</p>
          </article> 
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5">Selected just for you</h2>
            <Button
              type="secondary"
              title="Show More"
            />
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Product;
