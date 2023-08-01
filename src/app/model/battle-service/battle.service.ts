import { Injectable } from '@angular/core';
import { Hero } from '../gameplay-model/heroes/hero';
import { Enemy } from '../gameplay-model/enemies/enemy';
import { Cavalier } from '../gameplay-model/heroes/knight';

const godfrey: Cavalier = new Cavalier("godfrey", "Godfrey");
const dulcineus: Cavalier = new Cavalier("dulcineus", "Dulcineus");

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  heroes: Hero[];
  enemies: Enemy[];

  constructor() {
    this.heroes = [godfrey, dulcineus];
    this.enemies = [];
  }
}
