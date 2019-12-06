import React, { ReactElement } from 'react';
import logo from '../../../assets/squeegee-logo.png'
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
export const Logo = (): ReactElement => {
  return (
    <NavLink to='/' className={styles.logoWrapper}>
      <img src={logo} alt='' className={styles.logo} />
      <h1 className={styles.title}>Aurora Grajeda</h1>
    </NavLink>
  )
};