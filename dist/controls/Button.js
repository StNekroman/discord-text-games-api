"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const ControlType_1 = require("./ControlType");
class Button {
    constructor(options) {
        this.type = ControlType_1.ControlType.BUTTON;
        this.style = options.style;
        this.label = options.label;
        this.emoji = options.emoji;
        this.custom_id = options.custom_id;
        this.url = options.url;
        this.disabled = options.disabled;
    }
}
exports.Button = Button;
