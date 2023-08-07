import { Component } from '@angular/core';
import { BattleService } from 'src/app/model/battle-service/battle.service';
import { BattleUiService } from 'src/app/model/battle-ui-service/battle-ui.service';

@Component({
  selector: 'app-with-battle-service',
  templateUrl: './with-battle-service.component.html',
  styleUrls: ['./with-battle-service.component.scss']
})
export class WithBattleServiceComponent {
  uiService: BattleUiService;
  battleService: BattleService;
  constructor(battleService: BattleService, battleUiService: BattleUiService) {
    this.battleService = battleService;
    this.uiService = battleUiService;
  }
}
