
type PrimitiveTypes = number|string|boolean|bigint|symbol|undefined|null;

export interface Serializable {
    [key : string|number|symbol] : PrimitiveTypes|Serializable;
}
