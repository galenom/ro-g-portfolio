import React from 'react';
import styles from './index.module.scss';

interface ThumbnailProps {
    src: string;
    onClick: () => void;
}
export const Thumbnail = ({ src, onClick }: ThumbnailProps) => {
    return (
        <button className={styles.thumbnail} onClick={onClick}><img src={src} alt={src} /></button>
    )
}