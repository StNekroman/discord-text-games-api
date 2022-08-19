
export enum EventType {
    JOIN = 0,
    LEAVE = 1,
    MESSAGE = 2,
    BUTTON_CLICK = 3,
    SELECT_CHANGE = 4
}

export type UserEventTypes = Exclude<EventType, undefined>;
export const UserEventTypes = [EventType.JOIN, EventType.LEAVE, EventType.MESSAGE, EventType.BUTTON_CLICK, EventType.SELECT_CHANGE];
