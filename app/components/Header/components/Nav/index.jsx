import React from 'react';
 
import './Nav.sass';

const BLOCK = 'navigation';

function Nav({}) {
    return (
        <nav className={BLOCK}>
            <a className={`${BLOCK}__link`} href="" >Profile</a>
            <a className={`${BLOCK}__link`} href="" >Settings</a>
        </nav>
    )
} 

export default Nav;