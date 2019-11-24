import React, { useEffect } from 'react';
import { Main } from '../layout/content/main';

export const Work = () => {
    useEffect(() => {
        document.title = 'Work - Aurora Grajeda';
    }, []);

    return (
        <Main>
            <h1>Work</h1>
        </Main>
    )
}