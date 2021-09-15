import React from 'react';

import Container from '../Container/index.jsx';

import './Layout.sass';

const BLOCK = 'layout';

function Layout({}) {
    return (
        <Container as="main" className={BLOCK}>
            <aside className={`${BLOCK}__aside`}>aside</aside>
            <article className={`${BLOCK}__content`}>
                content
            </article>
            <footer className={`${BLOCK}__footer`}>
                (c) By KiMiA . 2021
            </footer>
        </Container>
    )
} 

export default Layout;