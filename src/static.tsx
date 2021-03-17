import { renderToString } from 'react-dom/server';
import { App } from './index';

const config = {
    title: 'Sample static HTML'
};

function render(): string {
    return `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>${config.title}</title>
        </head>
        <body>
            <div id="root">${renderToString(<App />)}</div>
        </body>
    `;
}

export default render;
