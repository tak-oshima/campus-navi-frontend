import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyModalComponent } from './daisy-modal.component';

describe('ModalComponent', () => {
  let component: DaisyModalComponent;
  let fixture: ComponentFixture<DaisyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaisyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
