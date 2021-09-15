import React from 'react';
 
import Container from '../Container/index.jsx';
import Nav from './components/Nav/index.jsx';

import './Header.sass';

const BLOCK = 'header';

function Header({}) {
    return (
        <header className={BLOCK}>
            <Container className={`${BLOCK}__container`}>
                <div className={`${BLOCK}__logo`}>
                    KiMiA
                </div>
                <Nav />
            </Container>
        </header>
    )
} 

export default Header;