export type Serializable<T> = {
    [K in keyof T]: Required<T>[K] extends Function ? never : T[K] & Serializable<T[K]>
};