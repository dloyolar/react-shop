import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { Checkout } from '../pages/Checkout';
import { CreateAccount } from '../pages/CreateAccount';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { MyAccount } from '../pages/MyAccount';
import { NewPassword } from '../pages/NewPassword';
import { NotFound } from '../pages/NotFound';
import { Orders } from '../pages/Orders';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { SendEmail } from '../pages/SendEmail';

import '../styles/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/signup" element={<CreateAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
