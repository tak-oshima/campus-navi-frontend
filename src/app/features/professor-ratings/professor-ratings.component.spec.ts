import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRatingsComponent } from './professor-ratings.component';

describe('ProfessorRatingsComponent', () => {
  let component: ProfessorRatingsComponent;
  let fixture: ComponentFixture<ProfessorRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
