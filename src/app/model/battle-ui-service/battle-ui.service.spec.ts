import { TestBed } from '@angular/core/testing';

import { BattleUiService } from './battle-ui.service';

describe('BattleUiService', () => {
  let service: BattleUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
