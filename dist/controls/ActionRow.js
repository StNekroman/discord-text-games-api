"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = void 0;
const ControlType_1 = require("./ControlType");
class ActionRow {
    constructor(components) {
        this.type = ControlType_1.ControlType.ACTION_ROW;
        const selects = components.filter(control => control.type === ControlType_1.ControlType.SELECT_MENU);
        if (selects.length > 1) {
            throw "Only one select menu can be inside action row.";
        }
        if (selects.length === 1) {
            const buttons = components.filter(control => control.type === ControlType_1.ControlType.BUTTON);
            if (buttons.length > 0) {
                throw "Select menu and buttons can not be mixed in one action row.";
            }
        }
        this.components = components;
    }
}
exports.ActionRow = ActionRow;
