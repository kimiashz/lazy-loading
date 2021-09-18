import React, { Suspense } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Notify } from 'kimia-notify';

import routes from '/app/config/routes.js';
import * as paths from '/app/config/paths.js';

import './Content.sass';

const BLOCK = 'content';

function Content({
    className: classNameProp,
}) {
    const className = classNames(BLOCK, classNameProp);
    const Loading = <Notify info delay={5000} >Lazy Component is loading...</Notify>;

    return (
        <article className={className}>
            <Suspense fallback={Loading}>
                <Switch>
                    <Redirect exact from="/" to={paths.HOME} replace />
                    {routes.map(route => (
                        <Route
                            key={route.title}
                            {...route}
                        />
                    ))}
                </Switch>
            </Suspense>
        </article>
    )
} 

export default Content;