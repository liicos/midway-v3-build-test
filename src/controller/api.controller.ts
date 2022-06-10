import { Controller, Provide, Get } from '@midwayjs/decorator';
import * as cheerio from 'cheerio';

@Provide()
@Controller('/api/v1')
export class APIController {
  @Get('/test')
  async spider(): Promise<any> {
    const $ = cheerio.load(`<ul><li> Midway 3.0 </li></ul>`);
    return { code: 0, data: $('li').text() };
  }
}
