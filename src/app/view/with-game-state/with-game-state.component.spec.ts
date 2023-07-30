import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithGameStateComponent } from './with-game-state.component';

describe('WithGameStateComponent', () => {
  let component: WithGameStateComponent;
  let fixture: ComponentFixture<WithGameStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithGameStateComponent]
    });
    fixture = TestBed.createComponent(WithGameStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
