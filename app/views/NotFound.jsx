import React from 'react';
import { Notify } from 'kimia-notify';

const BLOCK = 'home';

function NotFound({}) {
    return (
       <div className={BLOCK}>
            <Notify warning delay={5000} >There is nothing to show.</Notify>
            <h1>404</h1>
            Not Found.
       </div>
    )
} 

export default NotFound;