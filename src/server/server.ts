import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  cookieParser from 'cookie-parser';
import * as  path from 'path';

import {Express} from "express";

export function initServer(): Express {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);

    const app: Express = express();

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));

    app.use(bodyParser());
    app.use(cookieParser());
    app.use(express.static(path.resolve(__dirname, '../../build')));
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, './views'));

    app.get('*', (req, res) => {
        res.render('Index', {js: 'admin.js', css: 'admin.css'});
    });

    return app;
}
