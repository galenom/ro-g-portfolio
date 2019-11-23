import React, { ReactElement } from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = (): ReactElement => {
    return (
        <nav className={styles.navWrapper}>
            <NavLink to='/' className={styles.navItem} activeClassName={styles.activeNavItem}>
                Work
            </NavLink>
            <NavLink to='/about' className={styles.navItem} activeClassName={styles.activeNavItem}>
                About
            </NavLink>
            <NavLink to='/contact' className={styles.navItem} activeClassName={styles.activeNavItem}>
                Contact
            </NavLink>
            <div className={styles.underline}></div>
        </nav>
    )
}