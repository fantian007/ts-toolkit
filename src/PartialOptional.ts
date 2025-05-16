/**
 * 部分属性变可选
 */
type PartialOptional<A, K extends keyof A> = Omit<A, K> & Partial<Pick<A, K>>;

export default PartialOptional;
