import React from 'react';
import { Notify } from 'kimia-notify';

const BLOCK = 'profile';

function Profile({}) {
    return (
       <div className={BLOCK}>
            <Notify success delay={5000} >Profile Page is Loaded.</Notify>
            <h1>Profile</h1>
            please change your profile.
       </div>
    )
} 

export default Profile;