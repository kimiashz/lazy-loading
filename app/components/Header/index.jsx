import React from 'react';
 
import Container from '../Container/index.jsx';

import './Header.sass';

const BLOCK = 'header';

function Header({}) {
    return (
        <header className={BLOCK}>
            <Container>
                header
            </Container>
        </header>
    )
} 

export default Header;