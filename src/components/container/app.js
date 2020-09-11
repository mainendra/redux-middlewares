import React from 'react';

import Interval from '../shared/interval';
import Timer from '../shared/timer';
import Users from '../shared/users';

const App = () => {
    return (
        <>
            <Interval />
            <hr />
            <Timer />
            <hr />
            <Users />
        </>
    )
}

export default App;
