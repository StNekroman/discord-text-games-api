import { Button } from "./Button";
import { Control } from "./Control";
import { ControlType } from "./ControlType";
import { SelectMenu } from "./SelectMenu";
import { TextInput } from "./TextInput";

export type ComponentsInMessage = Button | SelectMenu;
export type ComponentsInModal = Button | SelectMenu | TextInput;

export class ActionRow<T extends ComponentsInMessage|ComponentsInModal> implements Control {
    public readonly type = ControlType.ACTION_ROW;

    public readonly components : T[];

    constructor(components : T[]) {
        const selects = components.filter(control => control.type === ControlType.SELECT_MENU);
        if (selects.length > 1) {
            throw "Only one select menu can be inside action row.";
        }
        if (selects.length === 1) {
            const buttons = components.filter(control => control.type === ControlType.BUTTON);
            if (buttons.length > 0) {
                throw "Select menu and buttons can not be mixed in one action row.";
            }
        }

        this.components = components;
    }
}
