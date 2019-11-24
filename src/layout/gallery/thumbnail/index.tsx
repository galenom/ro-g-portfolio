import React from 'react';
import styles from './index.module.scss';

interface ThumbnailProps {
    src: string;
    onClick: () => void;
}
export const Thumbnail = ({ src, onClick }: ThumbnailProps) => {
    return (
        <a href="#" className={styles.thumbnail} onClick={onClick}><img src={src} /></a>
    )
}