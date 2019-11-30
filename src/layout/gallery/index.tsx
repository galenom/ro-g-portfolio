import React, { useState } from 'react';
import { Thumbnail } from './thumbnail';
import styles from './index.module.scss';
import { Display } from './display';

interface ImageSrc {
    thumbnail: string;
    display: string;
}
interface GalleryProps {
    images: ImageSrc[];
}

export const Gallery = ({ images }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <>
            <section className={styles.gallery}>
                {
                    images.map((img) => {
                        return <Thumbnail src={img.thumbnail} onClick={() => setSelectedImage(img.display)} key={img.display}/>
                    })
                }
                {
                    <Display src={selectedImage} onDismiss={() => setSelectedImage(null)}/>
                }
            </section>
        </>
    )
}