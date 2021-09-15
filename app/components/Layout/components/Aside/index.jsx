import React from 'react';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

import routes from '/app/config/routes.js';

import './Aside.sass';

const BLOCK = 'aside';

function Aside({
    className: classNameProp,
}) {
    const className = classNames(BLOCK, classNameProp);

    return (
        <aside className={className}>
            <nav className={`${BLOCK}__container`}>
                {routes
                    .filter(({ aside }) => Boolean(aside))
                    .map(({ path, title }) => (
                        <NavLink
                            key={title}
                            activeClassName={`${BLOCK}__link--active`}
                            className={`${BLOCK}__link`}
                            to={path}
                        >
                            {title}
                        </NavLink>
                    ))}
            </nav>
        </aside>
    )
} 

export default Aside;