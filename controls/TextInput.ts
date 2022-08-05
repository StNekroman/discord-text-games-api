import { Control } from "./Control";
import { ControlType } from "./ControlType"
import { TextInputStyle } from "./TextInputStyle";

type TextInputConstructorOptions = {
    custom_id: string; // a developer-defined identifier for the input, max 100 characters
    style: TextInputStyle; // the Text Input Style
    label: string; // the label for this component, max 45 characters
    min_length ?: number; // the minimum input length for a text input, min 0, max 4000
    max_length ?: number; // the maximum input length for a text input, min 1, max 4000
    required ?: boolean; // whether this component is required to be filled, default true
    value ?: string; // a pre-filled value for this component, max 4000 characters
    placeholder ?: string; // custom placeholder text if the input is empty, max 100 characters
};

export class TextInput implements Control {
    public readonly type = ControlType.TEXT_INPUT;

    public custom_id: string; // a developer-defined identifier for the input, max 100 characters
    public style: TextInputStyle; // the Text Input Style
    public label: string; // the label for this component, max 45 characters
    public min_length ?: number; // the minimum input length for a text input, min 0, max 4000
    public max_length ?: number; // the maximum input length for a text input, min 1, max 4000
    public required ?: boolean; // whether this component is required to be filled, default true
    public value ?: string; // a pre-filled value for this component, max 4000 characters
    public placeholder ?: string; // custom placeholder text if the input is empty, max 100 characters

    constructor(options : TextInputConstructorOptions) {
        this.custom_id = options.custom_id;
        this.style = options.style;
        this.label = options.label;
        this.min_length = options.min_length;
        this.max_length = options.max_length;
        this.required = options.required;
        this.value = options.value;
        this.placeholder = options.placeholder;
    }
}