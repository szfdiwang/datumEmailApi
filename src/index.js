const Koa = require('koa');
// const koaSwagger = require('koa2-swagger-ui');
const app = new Koa()
const path = require('path')
const router = require('./router/index');
const pkg = require("../package.json")
// cors设置
const cors = require('koa2-cors')

// 静态资源
// app.use(require('koa-static'))(path.resolve(__dirname, 'public'))

app.use(require('koa-body')({
    multipart: true,
}))

app.use(cors())

app.use(router.routes()).use(router.allowedMethods()) // 加载路由中间件

app.listen(8035, () => {
    console.log(`start - up success, listening port ${pkg.port} `);
})