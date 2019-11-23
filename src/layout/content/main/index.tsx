import React, { ReactElement } from 'react';
import styles from './index.module.scss';

interface MainProps {
    children: ReactElement;
}
export const Main = ({ children }: MainProps) => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                {children}
            </div>
        </main>
    )
};