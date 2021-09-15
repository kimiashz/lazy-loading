import React from 'react';

import Container from '../Container/index.jsx';
import Aside from './components/Aside/index.jsx';

import './Layout.sass';

const BLOCK = 'layout';

function Layout({}) {
    return (
        <Container as="main" className={BLOCK}>
            <Aside className={`${BLOCK}__aside`} />
            <article className={`${BLOCK}__content`}>
                content
            </article>
            <footer className={`${BLOCK}__footer`}>
                (C) BY KIMIA . SEP 2021
            </footer>
        </Container>
    )
} 

export default Layout;