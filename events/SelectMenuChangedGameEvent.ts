import { EventType } from "./EventType";
import { UserGameEvent } from "./UserGameEvent";

/**
 * Broadcasts when a user clicks on option inside select menu.
 */
export interface SelectMenuChangedGameEvent extends UserGameEvent<EventType.SELECT_CHANGE> {
    /**
     * Id of the select emnu, which was changed.
     */
    readonly selectId : string;

    /**
     * Array of selected option's values.
     */
    readonly values : string[];

    /**
     * Id of the message, where button is located.
     */
    readonly messageId : string;

    /**
     * Id of the channel, where message is located.
     */
    readonly channelId : string;
}