import React, { useEffect } from 'react';
import { Main } from '../layout/content/main';
import { Nav } from './nav';
import { Switch, useRouteMatch, Route } from 'react-router';

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
                        <h1>loteria</h1>
                    </Route>
                    <Route path={`${path}/installations`}>
                        <h1>installations</h1>
                    </Route>
                    <Route path={`${path}/other`}>
                        <h1>other</h1>
                    </Route>
                    <Route path={`${path}/studies`}>
                        <h1>studies</h1>
                    </Route>
                </Switch>
            </>
        </Main>
    )
}