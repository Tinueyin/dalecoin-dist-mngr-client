import React from 'react';

export default () => <div>{localStorage.getItem("userToken") ? <div>Log out</div> : <React.Fragment />}</div>;
