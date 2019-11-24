import React from 'react';
import images from './images.json';
import { Gallery } from '../../layout/gallery';

export const Other = () => {
    const thumbnails = images.map((img) => ({
        thumbnail: `/works/thumb/other/${img.name}`,
        display: `/works/display/other/${img.name}`
    }))

    return (
        <>
            <p>Los datos de la casa (4)<br />
            Data of the House<br/>
            Image Transfers<br/>
            2015</p>
            <Gallery images={thumbnails} />
        </>
    )
}