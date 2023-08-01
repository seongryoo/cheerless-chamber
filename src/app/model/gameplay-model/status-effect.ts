import { getRandom, getUID } from "../utils";
import { Entity, StatModifier, StatModifierType } from "./entity";

export type EffectExecution = (target: Entity) => void;

export enum EffectTypes {
    BURNING,
    SURGE
}

export abstract class StatusEffect {
    abstract id: string;
    abstract uid: string;
    abstract displayName: string;
    abstract description: string;
    abstract countDown: number;
    abstract discriminant: EffectTypes;
    abstract onApplyStatus: (target: Entity) => void;
    abstract onRemoveStatus: (target: Entity) => void;
    onTurnStart: EffectExecution | undefined;
    onTurnEnd: EffectExecution | undefined;
    decrementCountdown() {
        this.countDown -= 1;
    }
}

export class Burning extends StatusEffect {
    override uid: string;
    override id = "burning";
    override displayName = "Burning";
    override description = "Target takes damage at the beginning of each turn."
    override discriminant = EffectTypes.BURNING;
    override countDown: number;
    override onApplyStatus = (target: Entity) => {};
    override onRemoveStatus = (target: Entity) => {};
    burnMagnitude: number;
    override onTurnStart = (target: Entity) => {
        if (target.currHealth) {
            target.currHealth -= this.burnMagnitude;
        }
        this.decrementCountdown();
    }
    constructor(countDown: number, burnMagnitude: number) {
        super();
        this.uid = getUID();
        this.countDown = countDown;
        this.burnMagnitude = burnMagnitude;
    }
}

export class Surge extends StatusEffect {
    override uid: string;
    override id: string = "surge";
    override displayName: string = "Surge";
    override description: string = "Increases base attack by 25% for three turns.";
    override countDown: number;
    override discriminant: EffectTypes = EffectTypes.SURGE;

    constructor() {
        super();
        this.uid = getUID() + "surge";
        this.countDown = 3;
    }
    override onTurnStart = () => {
        this.decrementCountdown();
    };

    override onApplyStatus = (target: Entity) => {
        const modifier: StatModifier = {
            id: this.uid,
            magnitude: 1.25,
            type: StatModifierType.MULTIPLICATIVE
        };
        target.addStatModifier(target.strength, modifier);
    };
    override onRemoveStatus = (target: Entity) => {
        target.removeStatModifier(target.strength, this.uid);
    }
}


export class Flatfooted extends StatusEffect {
    override uid: string;
    override id: string = "flatfooted";
    override displayName: string = "Flatfooted";
    override description: string = "Decreases accuracy";
    override countDown: number;
    override discriminant: EffectTypes = EffectTypes.SURGE;
    accuracyMagnitude: number;
    constructor(countDown: number, accuracyMagnitude: number) {
        super();
        this.uid = getUID() + "flatfooted";
        this.countDown = countDown;
        this.accuracyMagnitude = accuracyMagnitude;
    }
    override onTurnStart = () => {
        this.decrementCountdown();
    };

    override onApplyStatus = (target: Entity) => {
        const modifier: StatModifier = {
            id: this.uid,
            magnitude: -this.accuracyMagnitude,
            type: StatModifierType.ADDITIVE
        };
        target.addStatModifier(target.accuracy, modifier);
    };
    override onRemoveStatus = (target: Entity) => {
        target.removeStatModifier(target.accuracy, this.uid);
    }
}


export class Bleeding extends StatusEffect {
    override uid: string;
    override id = "bleeding";
    override displayName = "Bleeding";
    override description = "Target takes damage at the beginning of each turn."
    override discriminant = EffectTypes.BURNING;
    override countDown: number;
    override onApplyStatus = (target: Entity) => {};
    override onRemoveStatus = (target: Entity) => {};
    bleedMagnitude: number;
    override onTurnStart = (target: Entity) => {
        if (target.currHealth) {
            target.currHealth -= this.bleedMagnitude;
        }
        this.decrementCountdown();
    }
    constructor(countDown: number, bleedMagnitude: number) {
        super();
        this.uid = getUID();
        this.countDown = countDown;
        this.bleedMagnitude = bleedMagnitude;
    }
}