import { Component } from '@angular/core';
import { BattleService } from 'src/app/model/battle-service/battle.service';
import { Hero } from 'src/app/model/gameplay-model/heroes/hero';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent {
  battleService: BattleService;
  constructor(battleService: BattleService) {
    this.battleService = battleService;
  }
}
