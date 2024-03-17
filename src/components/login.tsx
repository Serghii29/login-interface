/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../styles/login.styles.scss';
import { Link } from 'react-router-dom';

export const Login: React.FC = React.memo(() => {
  const [email] = useState('');
  const [password] = useState('');

  return (
    <div className="login">
      <h2 className="login__header">Log in to your account</h2>

      <div className="login__button-container">
        <button type="button" className="login__button">
          <img src="/google-logo.png" alt="google logo" />
          Google
        </button>
        <button type="button" className="login__button">
          <img src="/github-logo.png" alt="github logo" />
          Github
        </button>
      </div>

      <div className="login__line-container">
        <div className="login__line"> </div>
        <div className="login__text">OR</div>
        <div className="login__line"> </div>
      </div>

      <form className="login__form">
        <label>
          <input type="email" value={email} placeholder="Work email" className="login__input" />
        </label>

        <label>
          <input type="password" value={password} placeholder="Password" className="login__input" />
        </label>

        <div className="login__forgot-link">
          <Link to="/">Forgot your password?</Link>
        </div>

        <button type="submit" className="login__button-submit">
          Log in to Qencode
        </button>
      </form>

      <div className="login__sing-up">
        <p className="login__question">Is your company new to Qencode?</p>
        <Link to="/" className="login__link-sing-up">
          Sing up
        </Link>
      </div>
    </div>
  );
});
