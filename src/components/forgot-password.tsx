/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/forgot-password.styles.scss';

export const ForgotPassword: React.FC = () => (
  <div className="forgot-password">
    <h2 className="forgot-password__header">Forgot Password?</h2>

    <form className="forgot-password__form">
      <label>
        <input type="email" placeholder="Enter your email" className="forgot-password__input" />
      </label>

      <button type="submit" className="forgot-password__submit">Send</button>
    </form>

    <button type="button" className="forgot-password__cancel">Cancel</button>
  </div>
);
