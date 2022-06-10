import * as crypto from 'crypto';

export const cryptPwd = (password: string, salt: string): string => {
  const md5 = crypto.createHash('md5');
  return md5.update(salt + password).digest('hex');
};
