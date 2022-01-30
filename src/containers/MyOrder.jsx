import React, { useContext, useEffect } from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/MyOrder.scss';

import { AppContext } from '../context/AppContext';

import arrow from '@icons/flechita.svg';

export const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => state.cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, i) => (
          <OrderItem product={product} key={`orderItem-${i}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
