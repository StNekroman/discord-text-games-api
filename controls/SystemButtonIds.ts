/**
 * Contains ids for predefined system-known commands, which will be caught by system without passing it down to game plugin. 
 */
export enum SystemButtonIds {
    /**
     * Forces user to leave game session, which is associated with channel, where this event was generated
     */
    LEAVE_SESSION = "__TG__LEAVE_SESSION"
}