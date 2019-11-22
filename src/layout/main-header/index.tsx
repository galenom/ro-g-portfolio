import React, { ReactElement } from 'react';
import { NavBar } from '../navigation';
import { Logo } from '../logo';
import styles from './index.module.scss'

export const MainHeader = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar/>
    </header>
  );
}