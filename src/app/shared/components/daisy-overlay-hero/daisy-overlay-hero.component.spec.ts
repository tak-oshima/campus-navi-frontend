import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyOverlayHeroComponent } from './daisy-overlay-hero.component';

describe('DaisyOverlayHeroComponent', () => {
  let component: DaisyOverlayHeroComponent;
  let fixture: ComponentFixture<DaisyOverlayHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaisyOverlayHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyOverlayHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
