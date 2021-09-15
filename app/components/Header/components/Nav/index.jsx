import React from 'react';
import { Link } from "react-router-dom";

import routes from '/app/config/routes.js';

import './Nav.sass';

const BLOCK = 'navigation';

function Nav({}) {
    return (
        <nav className={BLOCK}>
            {routes
                .filter(({ header }) => Boolean(header))
                .map(({ path, title }) => (
                    <Link
                        key={title}
                        className={`${BLOCK}__link`}
                        to={path}
                    >
                        {title}
                    </Link>
                ))}
        </nav>
    )
} 

export default Nav;