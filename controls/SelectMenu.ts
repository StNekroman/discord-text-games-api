import { Control } from "./Control";
import { ControlType } from "./ControlType";
import { SelectOption } from "./SelectOption";

type SelectMenuConstructorOptions = {
    custom_id : string; // a developer-defined identifier for the select menu, max 100 characters
    options: SelectOption[]; // array of select options	the choices in the select, max 25
    placeholder ?: string; // custom placeholder text if nothing is selected, max 150 characters
    min_values ?: number; // the minimum number of items that must be chosen; default 1, min 0, max 25
    max_values ?: number; // the maximum number of items that can be chosen; default 1, max 25
    disabled ?: boolean;
};

export class SelectMenu implements Control {
    public readonly type = ControlType.SELECT_MENU;

    public custom_id : string; // a developer-defined identifier for the select menu, max 100 characters
    public options: SelectOption[]; // array of select options	the choices in the select, max 25
    public placeholder ?: string; // custom placeholder text if nothing is selected, max 150 characters
    public min_values ?: number; // the minimum number of items that must be chosen; default 1, min 0, max 25
    public max_values ?: number; // the maximum number of items that can be chosen; default 1, max 25
    public disabled ?: boolean;

    constructor(options : SelectMenuConstructorOptions) {
        this.custom_id = options.custom_id;
        this.options = options.options;
        this.placeholder = options.placeholder;
        this.min_values = options.min_values;
        this.max_values = options.max_values;
        this.disabled = options.disabled;
    }
}
