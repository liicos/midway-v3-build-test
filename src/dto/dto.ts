import { Rule, RuleType } from '@midwayjs/validate';

export class PaginationDTO {
  @Rule(RuleType.number().required().error(new Error('分页参数不正确')))
  pageSize: number;
  @Rule(RuleType.number().required().error(new Error('分页参数不正确')))
  currentPage: number;
  get skip() {
    return (this.currentPage - 1) * this.pageSize;
  }
  get take() {
    return this.pageSize;
  }
}

export class UserDTO {
  @Rule(
    RuleType.string().required().min(5).error(new Error('用户名格式不正确'))
  )
  username: string;

  @Rule(RuleType.string().required().min(5).error(new Error('密码格式不正确')))
  password: string;
}

export class ApplicationPostDTO {
  @Rule(
    RuleType.string().required().max(20).error(new Error('应用名称格式不正确'))
  )
  name: string;

  @Rule(RuleType.string().allow(''))
  desc?: string;
}

export class ApplicationGetDTO extends PaginationDTO {
  @Rule(RuleType.string().max(20).error(new Error('应用名称格式不正确')))
  name?: string;
}

export class ImageTypeDTO {
  @Rule(
    RuleType.string().required().max(20).error(new Error('分类名称格式不正确'))
  )
  name: string;

  @Rule(RuleType.number().required().error(new Error('分类格式不正确')))
  app_id: any;

  @Rule(RuleType.number().error(new Error('排序格式不正确')))
  sort?: any;
}

export class JkImageDTO {
  @Rule(RuleType.string().required().error(new Error('图片信息不正确_url')))
  url: string;

  @Rule(RuleType.number().required().error(new Error('图片信息不正确_width')))
  width?: number;

  @Rule(RuleType.number().required().error(new Error('图片信息不正确_height')))
  height?: number;

  @Rule(
    RuleType.string()
      .required()
      .max(40)
      .error(new Error('图片信息不正确_type_ids'))
  )
  type_ids: string;

  @Rule(RuleType.string())
  type?: string;
}

export class JkGetImageDTO extends PaginationDTO {
  @Rule(RuleType.string().allow('').error(new Error('图片参数不正确')))
  type_ids?: string;
}

export class TodayAnimalStatusDTO {
  @Rule(RuleType.number().required().error(new Error('该状态不正确')))
  state: boolean;
}

class TodayAnimalLunarBaseDTO {
  @Rule(RuleType.string().max(100).error(new Error('诗句格式不正确')))
  verse?: string;
  @Rule(RuleType.string().max(100).error(new Error('图片格式不正确')))
  image?: string;
  @Rule(RuleType.string().max(20).error(new Error('数字格式不正确')))
  number?: string;
  @Rule(RuleType.string().max(20).error(new Error('动物格式不正确')))
  animal?: string;
}

@Rule(TodayAnimalLunarBaseDTO)
export class TodayAnimalLunarInsertDTO extends TodayAnimalLunarBaseDTO {
  @Rule(RuleType.string().required().max(12).error(new Error('日期格式不正确')))
  date: string;
  @Rule(RuleType.string().required().error(new Error('数据格式不正确')))
  data: string;
}

@Rule(TodayAnimalLunarBaseDTO)
export class TodayAnimalLunarUpdateDTO extends TodayAnimalLunarBaseDTO {
  @Rule(RuleType.string().max(12).error(new Error('日期格式不正确')))
  date: string;
  @Rule(RuleType.string().error(new Error('数据格式不正确')))
  data: string;
}

@Rule(TodayAnimalLunarBaseDTO)
export class TodayAnimalLunarGetDTO extends TodayAnimalLunarBaseDTO {
  @Rule(RuleType.string().max(12).error(new Error('日期格式不正确')))
  date?: string;

  @Rule(RuleType.string().required().error(new Error('日期范围格式不正确')))
  startTime?: string;
  @Rule(RuleType.string().required().error(new Error('日期范围格式不正确')))
  endTime?: string;
}

export class WordBookGetDTO extends PaginationDTO {
  @Rule(RuleType.string().max(20).error(new Error('单词本名称格式不正确')))
  book_name?: string;
}

export class WordBookPostDTO {
  @Rule(
    RuleType.string()
      .required()
      .max(20)
      .error(new Error('单词本名称格式不正确'))
  )
  book_name: string;
  @Rule(
    RuleType.string()
      .required()
      .max(20)
      .error(new Error('单词表名称格式不正确'))
  )
  table_name: string;
  @Rule(RuleType.number())
  user_id: number;
}

export class WordPageGetDTO extends PaginationDTO {
  @Rule(RuleType.string().max(20).error(new Error('页码名称格式不正确')))
  page_name?: string;
  @Rule(RuleType.number().required().error(new Error('单词本格式不正确')))
  book_id: number;
}

export class WordPagePostDTO {
  @Rule(
    RuleType.string().required().max(20).error(new Error('页码名称格式不正确'))
  )
  page_name: string;
  @Rule(RuleType.number().required().error(new Error('单词本格式不正确')))
  book_id: number;
  @Rule(RuleType.number())
  user_id: number;
}

export class WordUserGetDTO extends PaginationDTO {
  @Rule(RuleType.number().required().error(new Error('页码名称格式不正确')))
  page_id: number;
  @Rule(RuleType.number())
  user_id: number;
}

export class WordUserPostDTO {
  @Rule(RuleType.number())
  user_id: number;
  @Rule(RuleType.number().required().error(new Error('页码格式不正确')))
  page_id: number;
  @Rule(RuleType.boolean())
  disabled: boolean;
  @Rule(RuleType.number())
  status: number;
  @Rule(RuleType.string())
  position: string;
}
