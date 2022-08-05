"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType[EventType["JOIN"] = 0] = "JOIN";
    EventType[EventType["LEAVE"] = 1] = "LEAVE";
    EventType[EventType["MESSAGE"] = 2] = "MESSAGE";
    EventType[EventType["BUTTON_CLICK"] = 3] = "BUTTON_CLICK";
    EventType[EventType["SELECT_CHANGE"] = 4] = "SELECT_CHANGE";
})(EventType = exports.EventType || (exports.EventType = {}));
