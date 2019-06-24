import React from 'react';
import LogoutButton from './GoogleLogOut'


export default () => <div>{localStorage.getItem("userToken") ? <LogoutButton />  : <React.Fragment />}</div>;
