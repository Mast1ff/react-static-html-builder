import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { HomeLayout } from './@layouts/HomeLayout';

const App: React.FC = ({}) => {
    return (
        <HomeLayout />
    );
};

type RenderFunctionArgs = {
    htmlWebpackPlugin: any
}

function render({ htmlWebpackPlugin }: RenderFunctionArgs): string {
    return `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>${htmlWebpackPlugin.options.title}</title>
        </head>
        <body>
            <div id="root">
                ${renderToStaticMarkup(<App />)}
            </div>
        </body>
    `;
}

export default render;
