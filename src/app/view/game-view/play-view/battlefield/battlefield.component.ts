import { Component } from '@angular/core';
import { WithBattleServiceComponent } from 'src/app/view/with-battle-service/with-battle-service.component';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent extends WithBattleServiceComponent {
}
