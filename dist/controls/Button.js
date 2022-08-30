"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const ControlType_1 = require("./ControlType");
class Button {
    constructor(options) {
        this.type = ControlType_1.ControlType.BUTTON;
        if (options.custom_id && options.custom_id.length > 100) {
            throw "Button id must be less or equal than 100 characters.";
        }
        if (options.label && options.label.length > 80) {
            options.label = options.label.substring(0, 77) + "...";
        }
        this.style = options.style;
        this.label = options.label;
        this.emoji = options.emoji;
        this.custom_id = options.custom_id;
        this.url = options.url;
        this.disabled = options.disabled;
    }
}
exports.Button = Button;
