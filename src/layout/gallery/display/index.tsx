import React from 'react';
import styles from './index.module.scss';

interface DisplayProps {
    src: string | null;
    onDismiss: () => void;
}
export const Display = ({ src, onDismiss }: DisplayProps) => {
    const hide = !src ? styles.hide : undefined;
    return (
        <aside className={`${styles.modal} ${hide}`} onClick={onDismiss}>
            {src && <img src={src} alt={src} /> }
        </aside>
    )
}