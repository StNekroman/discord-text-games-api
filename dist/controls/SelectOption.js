"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
class SelectOption {
    constructor(options) {
        this.label = options.label;
        this.value = options.value;
        this.description = options.description;
        this.emoji = options.emoji;
        this.default = options.default;
    }
}
exports.SelectOption = SelectOption;
