const home = require("../models/home")
const { renderData } = require("../config/render")
/**
 * 插入email
 */
exports.setUserEmail = async (ctx) => {
    const data = ctx.request.body;
    try {
        const result = await home.setEmail({
            email: data.email,
            create_time: Date.now()
        })
        // @ts-ignore
        renderData(ctx, result)
    } catch (error) {
        console.log(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            renderData(ctx, null, 500, '您输入的邮箱已订阅')
        } else {
            renderData(ctx, null, 500, '服务器内部错误')
        }

    }

}