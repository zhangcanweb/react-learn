const koa = require('koa');
const index = require('./routes');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const chalk = require('chalk');
const app = new koa();

app.use(cors());
app.use(logger());

app.use(index.routes(), index.allowedMethods())

app.listen(3001, err => {
    if (err) {
        throw err
    }
    console.log(`${chalk.green('http://127.0.0.1:3001')}`)
})