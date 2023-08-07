import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleUiService {

  activeHeroPosition: number = 0;
  setActiveHeroPosition(position: number) {
    this.activeHeroPosition = position;
  }
  constructor() { }
}
