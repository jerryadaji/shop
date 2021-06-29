import React from "react";
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import FormItem from "../forms/FormItem";

const CartListFooter = ({ totalPrice }) => {
  return (
    <div className="row align-items-center">
      <div className="col col-md-4">
        <FormItem>
          <input placeholder="Promo Code" />
          <FontAwesomeIcon icon={faPaperPlane} />
        </FormItem>
      </div>
      <div className="col col-md-3">
        <p>
          <span className="mr-4">Total Cost</span>
          <span className="font-weight-bold">
            <CurrencyFormat 
              value={totalPrice} 
              displayType={'text'} 
              thousandSeparator={true} 
              prefix={'₦'} 
            />
          </span>
        </p>
      </div>
      <div className="col col-md-5 text-right ">
        <Button
          title={"Continue SHopping"}
          type={"secondary"}
          onClick={() => console.log("Continue Shopping")}
          className="mr-3"
        />
        <Button
          title={"Next Step"}
          type={"primary"}
          onClick={() => console.log("Next Step")}
        />
      </div>
    </div>
  );
};
export default CartListFooter;
