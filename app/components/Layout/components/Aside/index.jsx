import React from 'react';
 import classNames from 'classnames';

import './Aside.sass';

const BLOCK = 'aside';

function Aside({
    className: classNameProp,
}) {
    const className = classNames(BLOCK, classNameProp);

    return (
        <aside className={className}>
            <a className={`${BLOCK}__link`} href="" >Home</a>
            <a className={`${BLOCK}__link`} href="" >Posts</a>
            <a className={`${BLOCK}__link`} href="" >Contact</a>
            <a className={`${BLOCK}__link`} href="" >About</a>
        </aside>
    )
} 

export default Aside;