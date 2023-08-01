import { getUID } from '../utils';
import { StatusEffect } from './status-effect';

export enum StatModifierType {
  ADDITIVE,
  MULTIPLICATIVE,
}

export interface StatModifier {
  id: string;
  desc?: string;
  magnitude: number;
  type: StatModifierType;
}

export interface Stat {
  baseValue: number;
  modifiers: StatModifier[];
}

export abstract class Entity {
  id: string;
  abstract displayName: string;

  getStatValue(stat: Stat): number {
    let value = stat.baseValue;
    for (const modifier of stat.modifiers) {
      if (modifier.type === StatModifierType.ADDITIVE) {
        value += modifier.magnitude;
      } else if (modifier.type === StatModifierType.MULTIPLICATIVE) {
        value *= modifier.magnitude;
      }
    }
    return value;
  }

  abstract maxHealth: Stat;
  getMaxHealth(): number {
    return this.getStatValue(this.maxHealth);
  }
  abstract accuracy: Stat;
  getAccuracy(): number {
    return this.getStatValue(this.accuracy);
  }
  abstract strength: Stat;
  getStrength(): number {
    return this.getStatValue(this.strength);
  }
  abstract armor: Stat;
  getArmor(): number {
    return this.getStatValue(this.armor);
  }
  abstract critChance: Stat;
  getCritChance(): number {
    return this.getStatValue(this.critChance);
  }

  currHealth: number = 0;

  maxStress: number = 10;
  abstract stress: number;

  statusEffects: StatusEffect[] = [];

  constructor(id: string) {
    this.id = id + getUID();
  }
  initHealth() {
    this.currHealth = this.maxHealth.baseValue;
  }
  takeDamage(amount: number) {
    const totalArmor = this.getArmor();
    const amountWithDamageReduction = Math.max(amount - totalArmor, 0);
    this.currHealth -= amountWithDamageReduction;
  }
  addStatusEffect(statusEffect: StatusEffect) {
    this.statusEffects.push(statusEffect);
    statusEffect.onApplyStatus(this);
  }
  removeStatusEffect(uid: string) {
    const index = this.statusEffects.findIndex((eff) => eff.uid === uid);
    if (index !== -1) {
      const eff = this.statusEffects[index];
      if (eff) {
        eff.onRemoveStatus(this);
        this.statusEffects.splice(index, 1);
      }
    }
  }
  addStatModifier = (stat: Stat, modifier: StatModifier) => {
    stat.modifiers.push(modifier);
    return stat;
  };
  removeStatModifier = (stat: Stat, modifierUID: string) => {
    const index = stat.modifiers.findIndex((mod) => mod.id === modifierUID);
    stat.modifiers.splice(index, 1);
    return stat;
  };
  addStress(amount: number) {
    this.stress += amount;
  }
  performOnTurnStart() {
    this.statusEffects.forEach((eff) => {
      if (eff.onTurnStart) {
        eff.onTurnStart(this);
      }
      if (eff.countDown <= 0) {
        this.removeStatusEffect(eff.uid);
      }
    });
  }
  performOnTurnEnd() {
    this.statusEffects.forEach((eff) => {
      if (eff.onTurnEnd) {
        eff.onTurnEnd(this);
      }
      if (eff.countDown <= 0) {
        this.removeStatusEffect(eff.uid);
      }
    });
  }
}
