/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/create-password.styles.scss';

export const CreateNewPassword: React.FC = React.memo(() => (
  <div className="create-password">
    <h2 className="create-password__header">Create new Password?</h2>

    <form className="create-password__form">
      <label className="create-password__label">
        Password
        <input type="password" placeholder="Password" className="create-password__input" />
      </label>

      <label className="create-password__label">
        Confirm Password
        <input type="password" placeholder="Password" className="create-password__input" />
      </label>

      <button type="submit" className="create-password__submit">Reset Password</button>
    </form>
  </div>
));
