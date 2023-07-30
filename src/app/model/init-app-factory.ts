import { GameStateService } from "./game-state.service";

export function initAppFactory(gameStateService: GameStateService) {
  return () => {
    gameStateService.goToTitleState();
  };
}
