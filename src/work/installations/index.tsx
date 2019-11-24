import React from 'react';
import { Gallery } from '../../layout/gallery';
import images from './images.json';

export const Installations = () => {
    const thumbnails = images.map((img) => ({
        thumbnail: `/works/thumb/installations/${img.name}`,
        display: `/works/display/installations/${img.name}`
    }))
    return (
        <>
            <Gallery images={thumbnails} />
        </>
    )
}