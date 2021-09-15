import React, { Suspense } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from "react-router-dom";

import Alert from '/app/components/Alert/index.jsx';
import routes from '/app/config/routes.js';
import * as paths from '/app/config/paths.js';

import './Content.sass';

const BLOCK = 'content';

function Content({
    className: classNameProp,
}) {
    const className = classNames(BLOCK, classNameProp);
    const Loading = <Alert info message="Lazy Component is loading..." />;

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