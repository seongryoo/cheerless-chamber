import { Stat } from "./gameplay-model/entity";

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