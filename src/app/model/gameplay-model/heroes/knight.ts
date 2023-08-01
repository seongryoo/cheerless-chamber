import { getRandom, stat } from "../../utils";
import { HeroAbility } from "../ability";
import { Stat } from "../entity";
import { Hero, HeroArchetypes } from "./hero";
import { Bleeding, Flatfooted, Surge } from "../status-effect";

const cleave: HeroAbility = {
    id: "cleave",
    displayName: "Cleave",
    validSourcePositions: [2, 3],
    validTargetPositions: [0, 1],
    accuracyModifier: 0,
    execution: (source, targets) => {
        const target = targets[0];
        const totalStrength =  source.getStrength();
        const attackDamage = Math.max(totalStrength + getRandom(-5, 5), 0);
        target.takeDamage(attackDamage);
    }
};
const crisisOfFaith: HeroAbility = {
    id: "crisis-of-faith",
    displayName: "Crisis of faith",
    validSourcePositions: [0, 1, 2, 3],
    validTargetPositions: [],
    accuracyModifier: 10,
    execution: (source, _targets) => {
        source.addStress(1);
        const surge = new Surge();
        source.addStatusEffect(surge);
    }
};
const lowSlash: HeroAbility = {
    id: "low-slash",
    displayName: "Low slash",
    validSourcePositions: [4],
    validTargetPositions: [0, 1],
    accuracyModifier: -5,
    execution: (source, targets) => {
        const target = targets[0];
        const totalStrength =  source.getStrength() * 0.85;
        const attackDamage = Math.max(totalStrength + getRandom(-5, 5), 0);
        target.takeDamage(attackDamage);
        const flatfooted = new Flatfooted(3, 10);
        const bleeding = new Bleeding(2, 3);
        target.addStatusEffect(flatfooted);
        target.addStatusEffect(bleeding);
    }
}

export class Cavalier extends Hero {
    override maxHealth: Stat;
    override accuracy: Stat;
    override strength: Stat;
    override armor: Stat;
    override critChance: Stat;
    override stress = 0;
    override displayName: string;
    override archetype = HeroArchetypes.CAVALIER;
    override archetypeDisplayName = "Cavalier"
    override abilities = [cleave, crisisOfFaith, lowSlash];

    constructor(id: string, name: string) {
        super(id);
        this.displayName = name;
        this.maxHealth = stat(20);
        this.accuracy = stat(90);
        this.strength = stat(5);
        this.armor = stat(0);
        this.critChance = stat(0.05);
        this.initHealth();
    }
}