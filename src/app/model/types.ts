import { Enemy } from "./gameplay-model/enemies/enemy";
import { Entity } from "./gameplay-model/entity";
import { Hero } from "./gameplay-model/heroes/hero";

export type HeroOrNull = Hero | null;
export type EnemyOrNull = Enemy | null;
export type EntityOrNull = Entity | null;
export enum Orientation {
    TO_THE_RIGHT, TO_THE_LEFT
}