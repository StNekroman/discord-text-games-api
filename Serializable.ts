export type Serializable<T = unknown> = {
    [K in keyof T]: Required<T>[K] extends Function ? never : T[K] & Serializable<T[K]>;    
};
