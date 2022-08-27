"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonClickGameEvent = void 0;
const EventType_1 = require("./EventType");
var ButtonClickGameEvent;
(function (ButtonClickGameEvent) {
    function isButtonClickGameEvent(event) {
        return event.type === EventType_1.EventType.BUTTON_CLICK;
    }
    ButtonClickGameEvent.isButtonClickGameEvent = isButtonClickGameEvent;
})(ButtonClickGameEvent = exports.ButtonClickGameEvent || (exports.ButtonClickGameEvent = {}));
