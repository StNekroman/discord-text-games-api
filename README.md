# discord-text-games-api
API interfaces for "Discord Text Games" Project.

Used to create text games in Discord.
Ready-to-use game, compatible with Discord Text Games must be in form of ZIP archive, where at root level exists file `package.json` with information about the game.

How discord text game creation is done:
1. You create main game app JS file (or TS and compile it to JS)
2. Your main file must export outside main game plugin class.
3. Exported game class must implement [GamePluginEntryPoint](https://github.com/StNekroman/discord-text-games-api/blob/main/GamePluginEntryPoint.ts "GamePluginEntryPoint") interface.
4. When you have your JS files ready - you need to create game `package.json` file with information about the game. See [PackageJsonStructure](https://github.com/StNekroman/discord-text-games-api/blob/main/PackageJsonStructure.ts "PackageJsonStructure") interface, it describes all required and optional fields. You can combine you npm's package.json with game's package.json and hold all fields in one file.
5. Now you need to pack you game plugin to ZIP archive. At root level of the archive there must be `package.json` file with game description. It must contain mandatory field `textGameEntryPoint` filled with path to main JS file (inside archive). If main game class is not exported via "default" export - then `textGameEntryPoint` additionally should contain name of the class in form: `app/app.js#NameOfMainClass`
6. When your ZIP is ready - you can upload it to Discord server [**here**](https://discord.gg/RUH3mjHVEz "**here**")