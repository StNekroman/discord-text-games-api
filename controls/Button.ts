import { ButtonStyle } from "./ButtonStyle";
import { Control } from "./Control";
import { ControlType } from "./ControlType";
import { Emoji } from "./Emoji";

type ButtonConstructorOptions = {
    style: ButtonStyle;
    label?: string; // text that appears on the button, max 80 characters
    emoji ?: Emoji;
    disabled ?: boolean;
    custom_id ?: string; // a developer-defined identifier for the button, max 100 characters
    url ?: string; // a url for link-style buttons
} & ({
    // App button
    custom_id : string;
    url ?: never;
} | {
    // Link button
    url : string;
    custom_id ?: never;
});

export class Button implements Control {
    public readonly type = ControlType.BUTTON;

    public style: ButtonStyle;
    public label?: string; // text that appears on the button, max 80 characters
    public emoji ?: Emoji;
    public custom_id ?: string; // a developer-defined identifier for the button, max 100 characters
    public url ?: string; // a url for link-style buttons
    public disabled ?: boolean;

    constructor(options : ButtonConstructorOptions) {
        if (options?.custom_id && options.custom_id.length > 100) {
            throw "Button id must be less or equal than 100 characters.";
        }

        this.style = options.style;
        this.label = options.label;
        this.emoji = options.emoji;
        this.custom_id = options.custom_id;
        this.url = options.url;
        this.disabled = options.disabled;
    }
}
