import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTablistComponent } from './hero-tablist.component';

describe('HeroTablistComponent', () => {
  let component: HeroTablistComponent;
  let fixture: ComponentFixture<HeroTablistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTablistComponent]
    });
    fixture = TestBed.createComponent(HeroTablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
