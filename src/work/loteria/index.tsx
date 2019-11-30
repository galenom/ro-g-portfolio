import React from 'react';
import { Gallery } from '../../layout/gallery';
import images from './images.json';
import styles from './index.module.scss';

export const Loteria = () => {
    const thumbnails = images.map((img) => ({
        thumbnail: `/works/thumb/loteria/${img.name}`,
        display: `/works/display/loteria/${img.name}`
    }))
    return (
        <>
            <p className={styles.details}>
                3 ¾ x 2 ½ <br />
                Screenprints <br />
                Editions of 16 <br />
                2014-2015 <br />
                $25 each
            </p>
            <Gallery images={thumbnails} />
        </>
    )
}