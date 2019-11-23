import React, { ReactElement } from 'react';
import styles from './index.module.scss';
import { NavLink, match } from 'react-router-dom';
import { Location } from 'history';

export const NavBar = (): ReactElement => {
    return (
        <nav className={styles.navWrapper}>
            <NavLink
                to='/'
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                isActive={isActive}
            >
                About
            </NavLink>
            <NavLink
                to='/work'
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
            >
                Work
            </NavLink>
            <NavLink
                to='/contact'
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
            >
                Contact
            </NavLink>
            <div className={styles.underline}></div>
        </nav>
    )
}

const isActive = (_: match, location: Location<any>): boolean => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/';
}