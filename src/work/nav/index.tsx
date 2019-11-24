import React from 'react';
import { NavLink, useLocation, useRouteMatch, match } from 'react-router-dom';
import styles from './index.module.scss';
import { Location } from 'history';


export const Nav = () => {
    const { url } = useRouteMatch();

    return (
        <nav className={styles.navWrapper}>
            <NavLink
                to={url}
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                isActive={isActive}
            >
                Loteria
            </NavLink>
            <NavLink
                to={`${url}/installations`}
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
            >
                Installations
            </NavLink>
            <NavLink
                to={`${url}/other`}
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
            >
                Other
            </NavLink>
            <NavLink
                to={`${url}/studies`}
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
            >
                Studies
            </NavLink>
            <div className={styles.underline}></div>
        </nav>
    )
}

const isActive = (_: match, location: Location<any>): boolean => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/work';
}