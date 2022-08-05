import { EventType } from "./EventType";
import { UserGameEvent } from "./UserGameEvent";

/**
 * Broadcasts when a user leaves from game session
 */
export interface LeaveGameEvent extends UserGameEvent<EventType.LEAVE> {

}