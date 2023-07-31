import { Component } from '@angular/core';
import { WithGameStateComponent } from '../../with-game-state/with-game-state.component';

@Component({
  selector: 'app-game-title',
  templateUrl: './game-title.component.html',
  styleUrls: ['./game-title.component.scss']
})
export class GameTitleComponent extends WithGameStateComponent {
  public play() {
    this.gameStateService.goToPlayState();
  }
}
