import { Entity } from "./entity";
import { Hero } from "./hero";

export interface HeroAbility {
    id: string;
    accuracyModifier: number;
    displayName: string;
    validSourcePositions: number[];
    validTargetPositions: number[];
    execution: (source: Hero, targets: Entity[]) => void;
}