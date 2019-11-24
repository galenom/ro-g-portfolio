import React, { useEffect } from 'react';
import { Main } from '../layout/content/main';
import { Nav } from './nav';
import { Switch, useRouteMatch, Route } from 'react-router';
import { Loteria } from './loteria';
import { Installations } from './installations';
import { Other } from './other';
import { Studies } from './studies';

export const Work = () => {
    useEffect(() => {
        document.title = 'Work - Aurora Grajeda';
    }, []);

    const { path } = useRouteMatch();

    return (
        <Main>
            <>
                <Nav />
                <Switch>
                    <Route path={path} exact>
                        <Loteria />
                    </Route>
                    <Route path={`${path}/installations`}>
                        <Installations />
                    </Route>
                    <Route path={`${path}/other`}>
                        <Other />
                    </Route>
                    <Route path={`${path}/studies`}>
                        <Studies />
                    </Route>
                </Switch>
            </>
        </Main>
    )
}