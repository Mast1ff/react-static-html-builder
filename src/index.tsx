import { FC } from 'react';
import { hydrate } from 'react-dom';

import { HomeLayout } from './@layouts/HomeLayout';

export const App: FC = () => <HomeLayout />;

const mount = () => {
    if (typeof window !== 'undefined') {
        const root = document.getElementById('root');
        if (root) {
            hydrate(<App />, root);
        }
    }
};

mount();
