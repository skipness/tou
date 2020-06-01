import path from 'path';

export default (arg: string): string => path.join(__dirname, '..', arg);
