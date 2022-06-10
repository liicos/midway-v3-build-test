import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1654741193768_399',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'xxx',
    expiresIn: '1d',
    ignore: ['/api/v1/test'],
  },
} as MidwayConfig;
