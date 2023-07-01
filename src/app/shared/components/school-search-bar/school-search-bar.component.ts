import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-school-search-bar',
  templateUrl: './school-search-bar.component.html',
  styleUrls: ['./school-search-bar.component.css']
})
export class SchoolSearchBarComponent implements OnInit {
  search = new FormControl();
  isFocused: boolean = false;
  suggestions: any[] = [];
  
  @HostListener('focusin') onFocusIn() {
    this.isFocused = true;
  }

  @HostListener('focusout') onFocusOut() {
    this.isFocused = false;
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(500), // delay
        switchMap(query => {
          if (!query) {
            return of([]);
          }
          return of(["慶應義塾大学", "東京大学", "早稲田大学", "青山学院大学", "筑波大学", "日本大学", "明治大学", "立教大学", "千葉大学", "京都大学"].filter(school => school.includes(query as string)))
        })
      )
      .subscribe(response => {
        this.suggestions = response;
        console.log(this.suggestions);
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