const router = require('koa-router')();

router.get('/api/headerList', (ctx, next) => {
  ctx.body = ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
  next()
})
router.get('/api/carouselList', (ctx) => {
  ctx.body = [
    {
      id: 0,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 1,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/7cfb81808f506e2776bb9499713aa061ae8376d6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 3,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 4,
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
})

module.exports = router;