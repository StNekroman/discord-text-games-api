
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
     * How many concurrent players can be in the game session.
     * 1 = for solo game,
     * (1, unlim) = for limitings number of game players
     * Default value (`undefined`) means unlimited count.
     */
    maxPlayers ?: number;

    /**
     * Path main game plugin's entry point file with class name after hash.
     * @example ./app/app.js#GameClass
     * @example ./app/app.js - default export will be used, if class name is not specified.
     */
    textGameEntryPoint: string;

    /**
     * If true, any joining user will automatically receive private channel or thread for communication with game.
     */
    autoCreateUserChannels : boolean;
}
