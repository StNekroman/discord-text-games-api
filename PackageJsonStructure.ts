import { MessagesDeliveryMode } from "./MessagesDeliveryMode";

/**
 * Interface describing set of fields, which are expected in game plugin package.json
 */
export interface PackageJsonStructure {
    /**
     * Name of the game
     */
    name : string;

    /**
     * Version of plugin
     */
    version: string;

    /**
     * Description of the game
     */
    description: string;

    /**
     * Array of supported languages
     */
    languages : string[];

    /**
     * If game supports multile joined users;
     */
    multiplayer ?: boolean;

    /**
     * Path main game plugin's entry point file with class name after hash.
     * @example ./app/app.js#GameClass
     * @example ./app/app.js - default export will be used, if class name is not specified.
     */
    textGameEntryPoint: string;

    /**
     * Currently only one option supported, reserved for future.
     */
    messagesDeliveryMode ?: MessagesDeliveryMode.PRIVATE_THREAD_OR_CHANEL;
}
