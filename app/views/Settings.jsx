import React from 'react';
import { Notify } from 'kimia-notify';

const BLOCK = 'settings';

function Settings({}) {
    return (
       <div className={BLOCK}>
            <Notify success delay={5000} >Setting Page is Loaded.</Notify>
            <h1>Settings</h1>
            please change your Settings.
       </div>
    )
} 

export default Settings;