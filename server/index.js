const koa = require('koa');
const app = new koa();

app.use(() => {
    
})

app.listen(3000, err => {
    if (err) {
        throw err
    }
    console.log('127.0.0.1:3000')
})