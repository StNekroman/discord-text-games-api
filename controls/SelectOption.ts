import { Emoji } from "./Emoji";

type SelectOptionConstructorOptions = {
    label: string; // the user-facing name of the option, max 100 characters
    value: string; // the dev-defined value of the option, max 100 characters
    description ?: string; // an additional description of the option, max 100 characters
    emoji ?: Emoji;
    default ?: boolean; // will render this option as selected by default
};

export class SelectOption {
    label: string; // the user-facing name of the option, max 100 characters
    value: string; // the dev-defined value of the option, max 100 characters
    description ?: string; // an additional description of the option, max 100 characters
    emoji ?: Emoji;
    default ?: boolean; // will render this option as selected by default

    constructor(options: SelectOptionConstructorOptions) {
        this.label = options.label;
        this.value = options.value;
        this.description = options.description;
        this.emoji = options.emoji;
        this.default = options.default;
    }
}