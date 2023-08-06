import { Injectable } from '@angular/core';
import { Hero } from '../gameplay-model/heroes/hero';
import { Cavalier } from '../gameplay-model/heroes/knight';
import { trimEntities } from '../utils';
import { HeroOrNull, EnemyOrNull, Orientation } from '../types';

const godfrey: Cavalier = new Cavalier('godfrey', 'Godfrey');
const dulcineus: Cavalier = new Cavalier('dulcineus', 'Dulcineus');

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  heroes: HeroOrNull[];
  enemies: EnemyOrNull[];

  constructor() {
    this.heroes = [godfrey, dulcineus];
    this.enemies = [];
    this.trimHeroes();
    this.trimEnemies();
    console.log(this.heroes);
    console.log(this.enemies);
  }

  trimHeroes() {
    this.heroes = trimEntities<HeroOrNull>(this.heroes, Orientation.TO_THE_RIGHT);
  }

  trimEnemies() {
    this.enemies = trimEntities<EnemyOrNull>(this.enemies, Orientation.TO_THE_LEFT);
  }


  getHero(position: number): HeroOrNull {
    return this.heroes[position];
  }

  getHeroPosition(hero: Hero): number {
    return this.heroes.findIndex(
      (heroOrNull) => heroOrNull !== null && heroOrNull.id === hero.id
    );
  }
}
