const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

const host = 'algolia-demo.fm.test';

mix.setPublicPath('./web');
mix.js(['src/js/main.js'], 'web/assets/main.js');

mix.webpackConfig({
    plugins: [
        new Dotenv({
            path: `${__dirname}/.env`,
            safe: true,
        }),
    ],
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});
