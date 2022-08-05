import { EventType } from "./EventType";
import { UserGameEvent } from "./UserGameEvent";

/**
 * Broadcasts when a user joins to game session
 */
export interface JoinGameEvent extends UserGameEvent<EventType.JOIN> {
    /**
     * Indicates if this is first user joined, which started game session
     */
    readonly isFirst : boolean;

    /**
     * Id of the channel, which was created for user.
     */
    readonly channelId : string;
}