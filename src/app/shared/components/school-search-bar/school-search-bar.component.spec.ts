import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSearchBarComponent } from './school-search-bar.component';

describe('SchoolSearchBarComponent', () => {
  let component: SchoolSearchBarComponent;
  let fixture: ComponentFixture<SchoolSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
