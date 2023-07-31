import { Injectable } from '@angular/core';
import { Hero } from './gameplay-model/hero';
import { Enemy } from './gameplay-model/enemy';

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
