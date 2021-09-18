import React from 'react';
import { Notify } from 'kimia-notify';

const BLOCK = 'home';

function Home({}) {
    return (
       <div className={BLOCK}>
            <Notify success delay={5000} >Home Page is Loaded.</Notify>
            <h1>Home</h1>
            Dont ever forget that You're Awsome.
       </div>
    )
} 

export default Home;