import { DiscordApi } from "./DiscordApi";
import { GameEvent } from "./events/GameEvent";
import { Serializable } from "./Serializable";

/**
 * Represents fields and methods, which are expected to be present in game plugin's entry point exported class
 */
export interface GamePluginEntryPoint {
    /**
     * Discord API will be wired automatically after construction
     */
    discordApi : DiscordApi;

    /**
     * Just a hint, that constructor of game plugin can accept command-line-like arguments.
     * @param args optional arguments (command line) which can be passed on creation of new session.
     */
    new ? (args ?: string) : GamePluginEntryPoint;

    /**
     * Lifecycle callback method, which will be invoked after service construction.
     * @param saveBundle if present - holds previously saved game state/variables/etc of current session on last session shut down.  
     * @return Promise to wait on
     */
    initialize(saveBundle ?: Serializable) : Promise<unknown>;

    /**
     * Lifecycle callback method, which will be invoked when service shutdown requested.
     * Place in this method saving of state (db) and/or releasing of all resources.
     * @param saveBundle empty object to store there game state, variables, etc. Will be given in initialize() on session restoration.
     * @return Promise to wait on before actual shutdown.
     */
    destroy(saveBundle ?: Serializable) : Promise<void>;

    /**
     * Method to catch all incomming event from game system.
     * @param event incomming event
     */
    onEvent(event : GameEvent): void;
}
