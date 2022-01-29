import React from 'react';
import '../styles/MyAccount.scss';

export const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label className="label">Name</label>
            <p className="value">Camila Yokoo</p>
            <label className="label">Email</label>
            <p className="value">camilayokoo@gmail.com</p>
            <label className="label">Password</label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};