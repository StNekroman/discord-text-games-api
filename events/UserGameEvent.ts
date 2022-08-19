import { GameUser } from "../dto";
import { EventType, UserEventTypes } from "./EventType";
import { GameEvent } from "./GameEvent";

/**
 * Represent all kinds of events, related to user
 */
export interface UserGameEvent<T extends UserEventTypes> extends GameEvent<T> {
    /**
     * User, which performed action or action related to this user
     */
    readonly user : GameUser;
}

export namespace UserGameEvent {
    export function isUserEvent<T extends EventType>(event : GameEvent<T>) : event is UserGameEvent<T> {
        return UserEventTypes.includes(event.type);
    }
}