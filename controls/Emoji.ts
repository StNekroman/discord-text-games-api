export interface Emoji {
    id ?: string; // emoji id
    name ?: string; // (can be null only in reaction emoji objects)	emoji name
    animated ?: boolean; // whether this emoji is animated
}