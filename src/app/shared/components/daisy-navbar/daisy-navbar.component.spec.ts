import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyNavbarComponent } from './daisy-navbar.component';

describe('DaisyNavbarComponent', () => {
  let component: DaisyNavbarComponent;
  let fixture: ComponentFixture<DaisyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaisyNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
