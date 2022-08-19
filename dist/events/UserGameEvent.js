"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGameEvent = void 0;
const EventType_1 = require("./EventType");
var UserGameEvent;
(function (UserGameEvent) {
    function isUserEvent(event) {
        return EventType_1.UserEventTypes.includes(event.type);
    }
    UserGameEvent.isUserEvent = isUserEvent;
})(UserGameEvent = exports.UserGameEvent || (exports.UserGameEvent = {}));
