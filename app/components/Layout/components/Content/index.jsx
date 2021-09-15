import React from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from "react-router-dom";

import routes from '/app/config/routes.js';
import * as paths from '/app/config/paths.js';

import './Content.sass';

const BLOCK = 'content';

function Content({
    className: classNameProp,
}) {
    const className = classNames(BLOCK, classNameProp);

    return (
        <article className={className}>
            <Switch>
                <Redirect exact from="/" to={paths.HOME} replace />
                {routes.map(route => (
                    <Route
                        key={route.title}
                        {...route}
                    />
                ))}
            </Switch>
        </article>
    )
} 

export default Content;