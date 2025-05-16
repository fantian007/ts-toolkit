/** 直接用 Awaited 即可 */
export type PromiseV<T> = T extends Promise<infer R> ? R : never;
