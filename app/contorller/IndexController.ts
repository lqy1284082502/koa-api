import { Context } from 'koa'

class IndexController {
    async index(ctx: Context) {
        ctx.body = 'Hello World'
    }

}

export default new IndexController()
