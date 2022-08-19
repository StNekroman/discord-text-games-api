import { GameUser } from "../dto";
import { UserEventTypes } from "./EventType";
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