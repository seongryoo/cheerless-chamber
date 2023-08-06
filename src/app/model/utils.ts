import { Entity, Stat } from "./gameplay-model/entity";
import { EntityOrNull, Orientation } from "./types";

export const getRandom = (min: number, max: number) => {
  if (max <= min) {
    throw new Error('Minimum value is greater than maximum.');
  }
  const randomDecimal = Math.random();
  const range = max - min;
  return Math.floor(min + randomDecimal * range);
};

export const getUID = () => {
  return getRandom(0, 1_000_000_000) + "";
}

export const stat = (baseValue: number) => {
  const statObject: Stat = {
    baseValue: baseValue,
    modifiers: []
  }
  return statObject;
}

export const moveBlanksLeft = (a: EntityOrNull, b: EntityOrNull): number => {
  if (a === null) {
    return -1;
  }
  if (b === null) {
    return 1;
  }
  return 0;
}

export const moveBlanksRight = (a: EntityOrNull, b: EntityOrNull): number => {
  return -1 * moveBlanksLeft(a, b);
}

export const trimEntities = <T extends EntityOrNull>(arr: T[], orientation: Orientation): T[] => {
  let result: (T | null)[] = arr;
  if (result.length > 4) {
    result = result.filter((item) => item !== null);
  } 
  if (result.length < 4) {
    for (let i = result.length; i < 4; i++) {
      result.push(null);
    }
  }
  if (orientation === Orientation.TO_THE_RIGHT) {
    result.sort(moveBlanksLeft);
  } else {
    result.sort(moveBlanksRight);
  }
  return result as T[];
}