import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { HttpStatus, MidwayHttpError } from '@midwayjs/core';

@Catch()
export class DefaultErrorFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    ctx.status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    // 所有的未分类错误会到这里
    return {
      code: -1,
      message: err.message,
    };
  }
}
