import { Injectable } from '@angular/core';
import { Hero } from '../gameplay-model/heroes/hero';
import { Enemy } from '../gameplay-model/enemies/enemy';
import { Cavalier } from '../gameplay-model/heroes/knight';
import { sortEntities } from '../utils';

const godfrey: Cavalier = new Cavalier("godfrey", "Godfrey");
const dulcineus: Cavalier = new Cavalier("dulcineus", "Dulcineus");

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  heroes: (Hero | null)[];
  enemies: (Enemy | null)[];

  constructor() {
    this.heroes = [godfrey, null, dulcineus, null];
    this.heroes = this.heroes.sort(sortEntities);
    this.enemies = [];
  }
}
