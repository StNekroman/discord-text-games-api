"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMenu = void 0;
const ControlType_1 = require("./ControlType");
class SelectMenu {
    constructor(options) {
        this.type = ControlType_1.ControlType.SELECT_MENU;
        this.custom_id = options.custom_id;
        this.options = options.options;
        this.placeholder = options.placeholder;
        this.min_values = options.min_values;
        this.max_values = options.max_values;
        this.disabled = options.disabled;
    }
}
exports.SelectMenu = SelectMenu;
