import { HeroAbility } from "../ability";
import { Entity } from "../entity";

export enum HeroArchetypes {
    CAVALIER
}

export abstract class Hero extends Entity {
    abstract archetype: HeroArchetypes;
    abstract archetypeDisplayName: string;
    abstract abilities: HeroAbility[];
    constructor(id: string) {
        super(id);
    }
}