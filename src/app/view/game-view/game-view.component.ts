import { Component } from '@angular/core';
import { WithGameStateComponent } from '../with-game-state/with-game-state.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent extends WithGameStateComponent {
}
