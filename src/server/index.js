const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);

const app = express();

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

app.listen(3000, () => console.log('Server is running on port 3000'));