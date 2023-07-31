import { Injectable } from '@angular/core';
import { Hero } from './gameplay-model/heroes/hero';
import { Enemy } from './gameplay-model/enemies/enemy';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  heroes: Hero[];
  enemies: Enemy[];

  constructor() {
    this.heroes = [];
    this.enemies = [];
  }
}
