"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const ControlType_1 = require("./ControlType");
class TextInput {
    constructor(options) {
        this.type = ControlType_1.ControlType.TEXT_INPUT;
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
exports.TextInput = TextInput;
