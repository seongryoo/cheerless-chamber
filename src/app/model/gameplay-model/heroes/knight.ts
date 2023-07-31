import { getRandom, stat } from "../../utils";
import { HeroAbility } from "../ability";
import { Stat } from "../entity";
import { Hero, HeroArchetypes } from "../hero";
import { Surge } from "../status-effect";

const cleave: HeroAbility = {
    id: "cleave",
    displayName: "Cleave",
    validSourcePositions: [0, 1],
    validTargetPositions: [0, 1],
    accuracyModifier: 0,
    execution: (source, targets) => {
        const target = targets[0];
        const totalStrength =  source.getStrength();
        const attackDamage = Math.max(totalStrength + getRandom(-5, 5), 0);
        target.takeDamage(attackDamage);
    }
};
const despair: HeroAbility = {
    id: "despair",
    displayName: "Despair",
    validSourcePositions: [0, 1, 2, 3],
    validTargetPositions: [],
    accuracyModifier: 0,
    execution: (source, _targets) => {
        source.addStress(1);
        const surge = new Surge();
        source.addStatusEffect(surge);
    }
};

export class Knight extends Hero {
    override maxHealth: Stat;
    override accuracy: Stat;
    override strength: Stat;
    override armor: Stat;
    override stress = 0;
    override displayName: string;
    override archetype = HeroArchetypes.KNIGHT;
    override archetypeDisplayName = "Knight"
    override abilities = [cleave, despair];

    constructor(id: string, name: string) {
        super(id);
        this.displayName = name;
        this.maxHealth = stat(20);
        this.accuracy = stat(90);
        this.strength = stat(5);
        this.armor = stat(0);
        this.initHealth();
    }
}