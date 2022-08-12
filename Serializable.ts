
type PrimitiveTypes = number|string|boolean|bigint|symbol|undefined|null;
type AnyDimensionalArray<T> = Array<T>|Array<AnyDimensionalArray<T>>;

export interface Serializable {
    [key : string|number|symbol] : PrimitiveTypes|ThisType<Serializable>|AnyDimensionalArray<PrimitiveTypes>|AnyDimensionalArray<ThisType<Serializable>>;
}
