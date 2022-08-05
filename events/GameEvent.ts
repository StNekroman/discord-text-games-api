import { EventType } from "./EventType";

/**
 * Root game event type
 */
export interface GameEvent<T extends EventType = EventType> {
    readonly type: T;
}