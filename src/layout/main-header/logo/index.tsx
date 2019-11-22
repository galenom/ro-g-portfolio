import React, { ReactElement } from 'react';
import logo from '../../../assets/squeegee-logo.png'
import styles from './index.module.scss';
export const Logo = (): ReactElement => {
  return (
    <a href='/' className={styles.logoWrapper}>
      <img src={logo} alt='' className={styles.logo} />
      <h1 className={styles.title}>Aurora Grajeda</h1>
    </a>
  )
};