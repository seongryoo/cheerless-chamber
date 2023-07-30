import { Component } from '@angular/core';
import { GameStateService } from 'src/app/model/game-state.service';
import { GameStates } from 'src/app/model/game-states';

@Component({
  selector: 'app-with-game-state',
  templateUrl: './with-game-state.component.html',
  styleUrls: ['./with-game-state.component.scss'],
})
export class WithGameStateComponent {
  gameStateService: GameStateService;
  readonly GameStates = GameStates;
  gameState: GameStates;
  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
    this.gameState = GameStates.OFF;
    this.gameStateService.getState().subscribe((state: any) => {
      this.gameState = state;
    });
  }
}
