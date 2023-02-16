import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './MainNavigation.module.css';
import { loginActions } from '../store/loginSlice';
import { themeActions } from '../store/themeSlice';
import { expenseAction } from '../store/expenseSlice';

const MainNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
    dispatch(themeActions.light());
    dispatch(themeActions.premium(false));
    dispatch(expenseAction.firstTime(true));
    navigate('/login');
  };

  return (
    <div className={classes.mainNav}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/expenses'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/profile'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.button}>
        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </div>
    </div>
  );
};

export default MainNavigation;
