const router = require('koa-router');

router.get(async (ctx) => {
  ctx.body = 'index html'
})

module.export = router;