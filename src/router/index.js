
const { setUserEmail } = require("../controllers/home")
const router = new (require('koa-router'))()

router.get('/', async (ctx) => {
    ctx.body = 'hello koa!'
})

router.post('/api/setUserEmail', setUserEmail)

//返回注册路由
module.exports = router