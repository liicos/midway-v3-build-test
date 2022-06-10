import { Config, Inject, Middleware } from '@midwayjs/decorator';
import { Context, NextFunction } from '@midwayjs/koa';
import { httpError } from '@midwayjs/core';
import { JwtService } from '@midwayjs/jwt';

@Middleware()
export class JwtMiddleware {
  @Inject()
  jwtService: JwtService;

  @Config('jwt')
  jwtConfig;

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // return await next();
      if (this.jwtConfig.ignore.includes(ctx.path)) {
        return await next();
      }
      // 判断下有没有校验信息
      if (!ctx.headers['authorization']) {
        throw new httpError.UnauthorizedError();
      }
      // 从 header 上获取校验信息
      const parts = ctx.get('authorization').trim().split(' ');

      if (parts.length === 2) {
        const scheme = parts[0];
        const token = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          //jwt.verify方法验证token是否有效，失效会自动抛出异常
          try {
            await this.jwtService.verify(token, this.jwtConfig.secret, {
              complete: true,
            });
            await next();
          } catch (err) {
            // 如果是token过期
            if (err.name === 'TokenExpiredError') {
              throw new httpError.UnauthorizedError();
            }
            // 其他错误，转给后续中间件处理
            throw err;
          }
        } else {
          throw new httpError.UnauthorizedError();
        }
      } else {
        throw new httpError.UnauthorizedError();
      }
    };
  }

  static getName(): string {
    return 'jwt';
  }
}
