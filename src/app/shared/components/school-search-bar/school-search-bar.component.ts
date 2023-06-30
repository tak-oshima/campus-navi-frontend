import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-school-search-bar',
  templateUrl: './school-search-bar.component.html',
  styleUrls: ['./school-search-bar.component.css']
})
export class SchoolSearchBarComponent implements OnInit {
  public search = new FormControl();
  suggestions: any[] = [];

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(500), // delay
        switchMap(query => {
          if (!query) {
            return of([]);
          }
          return of(["慶應義塾大学", "東京大学", "早稲田大学", "青山学院大学"].filter(school => school.startsWith(query as string)))
        })
      )
      .subscribe(response => {
        this.suggestions = response;
      });
  }
}

/** Example of how to autocomplete search bar
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export class PatientListComponent implements OnInit {
  public patients: Patient[];
  public filteredPatients: Patient[];
  public searchControl = new FormControl();

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      this.filteredPatients = patients;
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filteredPatients = this.patients.filter(patient => 
          patient.name.toLowerCase().includes(value.toLowerCase()));
      });
  }
}
*/