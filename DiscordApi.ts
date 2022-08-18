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

        /**
         * Optional list of files to attach.
         * Each item can be Buffer with file content or string path to file.
         */
        files ?: (Buffer | string)[];
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
    sendMessageToUser(userId: string, text: string, options ?: DiscordApi.PostMessageOptions) : Promise<MessageDescriptor>;

    /**
     * Creates custom text channel. No one will hass access to it, by default.
     * @param name of new channel
     * @return channel id
     */
    createChannel(name: string) : Promise<string>;

    /**
     * Deletes previously created channel.
     * @param channelId id of the previously created channel to delete.
     */
    deleteChannel(channelId: string) : Promise<void>;

    /**
     * Grants permissions for user to see channel and, optionally, write messages there.
     * @param userId id of the user to add
     * @param channelId id of prviously created channel
     * @param canWrite if true - user will be allowed to write messages there
     */
    addUserToChannel(userId: string, channelId: string, canWrite : boolean) : Promise<void>;

    /**
     * Revokes permissions for user to see channel and write messages there.
     * @param userId id of the user to revoke permissions for
     * @param channelId id of prviously created channel
     */
    removeUserFromChannel(userId: string, channelId: string) : Promise<void>;

    /**
     * Sends message to previously created channel. 
     * @param text to send
     * @param channelId id of the channel, where to send the message. 
     * @param options optional additional controlling options
     * @return descriptor of created messages
     * @see MessageDescriptor
     */
    sendMessage(text: string, channelId : string, options ?: DiscordApi.PostMessageOptions) : Promise<MessageDescriptor>;

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
     * @param controlId id of the control to enable or disable. Supports glob-style wildcards (?, *) for matching many controls.
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
     * @param text new text payload, max length is 2000
     * @param options optional additional controlling options
     */
    editMessage(channelId: string, messageId: string, text: string, options ?: DiscordApi.PostMessageOptions) : Promise<void>;

    /**
     * Deletes own message
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message to delete.
     */
    deleteMessage(channelId: string, messageId: string) : Promise<void>;

    /**
     * Pins message in the channel.
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message to pin.
     */
    pinMessage(channelId: string, messageId: string) : Promise<void>;

    /**
     * Unpins message in the channel.
     * @param channelId id of the channel, where the message sits.
     * @param messageId id of the message to unpin.
     */
    unpinMessage(channelId: string, messageId: string) : Promise<void>;
}
