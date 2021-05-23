/**
 * 异步加载文件， 目前仅支持js， 后续追加css等其他文件
 */
export default function iRequire(url: string, callback?: () => void): Promise<unknown>;
