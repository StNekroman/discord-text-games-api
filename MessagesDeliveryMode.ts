/**
 * Describes where game messages should appear.
 */
export enum MessagesDeliveryMode {
    /**
     * Means creation of private thread (if possible) or private channel as fallback
     */
    PRIVATE_THREAD_OR_CHANEL = "PRIVATE_THREAD_OR_CHANEL",
    /**
     * Means creation of common text channel, shared for all game participants.
     */
    COMMON_TEXT_CHANNEL = "COMMON_TEXT_CHANNEL",
    /**
     * Means sending direct messages to user.
     */
    DM = "DM",
}
