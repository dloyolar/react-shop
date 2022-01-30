import React, { useContext } from 'react';
import '../styles/OrderItem.scss';

import { AppContext } from '../context/AppContext';

import close from '@icons/icon_close.png';

export const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (indexValue) => {
    removeFromCart(indexValue);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={close}
        alt="close"
        className="close-img"
        onClick={() => handleRemove(index)}
      />
    </div>
  );
};
