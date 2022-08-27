import { EventType } from "./EventType";
import { GameEvent } from "./GameEvent";
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

export namespace ButtonClickGameEvent {
    /**
     * Type-guard checked for ButtonClickGameEvent event type.
     * @param event to check
     * @returns true, if given event is ButtonClickGameEvent
     */
    export function isButtonClickGameEvent(event : GameEvent) : event is ButtonClickGameEvent {
        return event.type === EventType.BUTTON_CLICK
    }
}
