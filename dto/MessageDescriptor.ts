/**
 * Holds ids of things, required to identify message.
 */
export interface MessageDescriptor {
    /**
     * Id of the message.
     */
    readonly messageId : string;

    /**
     * Id of the channel, where message is located.
     */
    readonly channelId : string;
}