import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomeLayout } from './@layouts/HomeLayout';

const App: React.FC = ({}) => {
    return (
        <HomeLayout />
    );
};

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<App />, root);
}
