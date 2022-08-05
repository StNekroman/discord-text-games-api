import { EventType } from "./EventType";
import { UserGameEvent } from "./UserGameEvent";

/**
 * Broadcasts when a user clicks on button.
 */
export interface ButtonClickGameEvent extends UserGameEvent<EventType.BUTTON_CLICK> {
    /**
     * Id of the button, which was clicked.
     */
    readonly buttonId : string;

    /**
     * Id of the message, where button is located.
     */
    readonly messageId : string;

    /**
     * Id of the channel, where message is located.
     */
    readonly channelId : string;
}