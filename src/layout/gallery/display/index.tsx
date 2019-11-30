import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'
import ScrollLock from 'react-scrolllock';
import styles from './index.module.scss';

interface DisplayProps {
    src: string | null;
    onDismiss: () => void;
}
export const Display = ({ src, onDismiss }: DisplayProps) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(!!src);
    }, [src]);

    const onClick = () => {
        setVisible(false);
        onDismiss();
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if ([13, 27].includes(e.keyCode)) {
            console.log('e)');
            onClick();
        }
    }

    const hide = !src ? styles.hide : undefined;

    return createPortal(
        <ScrollLock isActive={isVisible}>
            <aside className={`${styles.modal} ${hide}`} onClick={onClick} onKeyDown={onKeyDown}>
                {src && <img src={src} alt={src} />}
            </aside>
        </ScrollLock>,
        // @ts-ignore
        document.getElementById('root')
    )
}