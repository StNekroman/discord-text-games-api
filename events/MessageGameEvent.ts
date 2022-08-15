import { EventType } from "./EventType";
import { UserGameEvent } from "./UserGameEvent";

/**
 * Broadcasts when a user sends a message in game channel
 */
export interface MessageGameEvent extends UserGameEvent<EventType.MESSAGE> {
    /**
     * Content of the message, which user has sent.
     */
    readonly text : string;

    /**
     * Id of the channel, where message was created.
     */
    readonly channelId : string;

    /**
     * Optional array of pre-downloaded (to session dir) attachments, which message includes.
     */
    readonly attachments ?: string[];
}