import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const handleToggleOrder = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Clothes</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Furnitures</Link>
          </li>
          <li>
            <Link to="/">Toys</Link>
          </li>
          <li>
            <Link to="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            email@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrder}>
            <img src={shoppingCart} alt="shopping cart" />
            <div>{state.cart?.length}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
