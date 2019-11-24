import React from 'react';
import { Gallery } from '../../layout/gallery';
import images from './images.json';

export const Loteria = () => {
    const thumbnails = images.map((img) => ({
        thumbnail: `/works/thumb/loteria/${img.name}`,
        display: `/works/display/loteria/${img.name}`
    }))
    return (
        <>
            <Gallery images={thumbnails} />
        </>
    )
}