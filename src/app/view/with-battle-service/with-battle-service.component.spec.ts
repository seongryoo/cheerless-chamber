import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBattleServiceComponent } from './with-battle-service.component';

describe('WithBattleServiceComponent', () => {
  let component: WithBattleServiceComponent;
  let fixture: ComponentFixture<WithBattleServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithBattleServiceComponent]
    });
    fixture = TestBed.createComponent(WithBattleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
