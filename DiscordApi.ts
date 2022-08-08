import { ActionRow } from "./controls";
import { ComponentsInMessage } from "./controls/ActionRow";
import { MessageDescriptor } from "./dto";

export namespace DiscordApi {
    /**
     * Options for `sendMessage` operation
     * @see DiscordApi.sendMessage
     */
    export interface PostMessageOptions {
        /**
         * Optional list of user ids which should be triggered and receive a notification ping.
         * Only users listed here will receive mention notification.
         * By default (if allowedMentions is empty or is not set) - nobody receives mention notification.
         */
        allowedMentions ?: string[];

        /**
         * Optional list with controls to attach to the message
         */
        components ?: ActionRow<ComponentsInMessage>[];
    }
}

/**
 * Exposes API for communication with users via Discord bot
 */
export interface DiscordApi {
    /**
     * Sends message to user's default delivery channel
     * @param userId id of user, to which send the message
     * @param text to send
     * @param options optional additional controlling options
     * @return descriptor of created messages
     * @see MessageDescriptor
     */
    sendMessage(userId: string, text: string, options ?: DiscordApi.PostMessageOptions) : Promise<MessageDescriptor>;

    /**
     * Sends message to common (for all game participants) channel or broadcast all all individual participants. 
     * Final implementation depends on server config.
     * @param userId id of user, to which send the message
     * @param text to send
     * @param channelId optional id of the common channel, where to send the message. Used if there are many common channels. 
     * @param options optional additional controlling options
     * @return descriptor of created messages or arrays of descriptor (when broadcast was to many individual channels)
     * @see MessageDescriptor
     */
    sendCommonMessage(text: string, channelId ?: string, options ?: DiscordApi.PostMessageOptions) : Promise<MessageDescriptor|MessageDescriptor[]>;

    /**
     * Sends message to user in private channel
     * @param userId id of user, to which send the message
     * @param text to send
     * @param options optional additional controlling options
     * @return descriptor of created messages
     * @see MessageDescriptor
     */
    sendPrivateMessage(userId: string, text: string, options ?: DiscordApi.PostMessageOptions) : Promise<MessageDescriptor>;

    /**
     * Enables/disabled control in message.
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message, which holds the control.
     * @param controlId id of the control to enable or disable.
     * @param enabled flag, true = enabled, false = disabled.
     */
    setControlEnabled(channelId: string, messageId: string, controlId: string, enabled: boolean) : Promise<void>;

    /**
     * Changes control in message to new.
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message, which holds the control.
     * @param controlId id of the control to replace.
     * @param control new control to insert onstead of previous.
     */
    replaceControl(channelId: string, messageId: string, controlId: string, control: ComponentsInMessage) : Promise<void>;

    /**
     * Edits message (including controls).
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message, which to edit.
     * @param text new text payload
     * @param options optional additional controlling options
     */
    editMessage(channelId: string, messageId: string, text: string, options ?: DiscordApi.PostMessageOptions) : Promise<void>;
}
