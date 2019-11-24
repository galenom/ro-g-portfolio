import React from 'react';
import { Gallery } from '../../layout/gallery';
import images from './images.json';

export const Studies = () => {
    const thumbnails = images.map((img) => ({
        thumbnail: `/works/thumb/studies/${img.name}`,
        display: `/works/display/studies/${img.name}`
    }))
    return (
        <>
            <Gallery images={thumbnails}/>
        </>
    )
}