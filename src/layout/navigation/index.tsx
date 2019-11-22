import React, { ReactElement } from 'react';
import styles from './index.module.scss';

export const NavBar = (): ReactElement => {
    return (
        <nav className={styles.navWrapper}>
            <a href='/work' className={styles.navItem}>Work</a>
            <a href='/about' className={styles.navItem}>About</a>
            <a href='/contact' className={styles.navItem}>Contact</a>
        </nav>
    )
}