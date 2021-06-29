import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CounterWrapper = styled.div`
  display: inline-flex;
  text-transform: uppercase;
  border-radius: 2em;
  overflow: hidden;

  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.grey};

  button, input{
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
  }

  button{
    font-size: ${({ theme }) => theme.fontSize.extraSmall};
    padding: 1em 1.5em;

    &:first-child{
      padding-right: 0.75em;
    }

    &:last-child{
      padding-left: 0.75em;
    }
  }

  input{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: center;
    padding: 1em 0;
    width 2.5em;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`;
const Counter = ({ value, id, price, callback, className }) => {
  const updateValue = (e) => callback(e.target.value);
  const increment = (e) => callback(value + 1);
  const decrement = (e) => callback(value - 1);
  const checkInput = (e) => {
    if (e.target.value < 1) callback(1);
    if (e.target.value > 999) callback(999);
  };
  return (
    <CounterWrapper className={className}>
      <button disabled={value <= 1 && true} onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        value={value}
        type="number"
        min="1"
        max="999"
        onChange={updateValue}
        onBlur={checkInput}
      />
      <button disabled={value >= 999 && true} onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </CounterWrapper>
  );
};

export default Counter;
