const router = require('koa-router')();

router.get('/', (ctx) => {
  ctx.body = ['吃饭', '睡觉', '打豆豆']
})

module.exports = router;