import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { School } from '@app/core/models/school';
import { SearchService } from '@app/core/services/search.service';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-school-search-bar',
  templateUrl: './school-search-bar.component.html',
  styleUrls: ['./school-search-bar.component.css']
})
export class SchoolSearchBarComponent implements OnInit {
  searchControl = new FormControl();
  isFocused: boolean = false;
  searchResult: any[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => query ? this.searchService.searchSchools(query) : of([]))
      )
      .subscribe(response => {
        this.searchResult = response;
      });
  }

  onSchoolSelect(school: School) {
    this.searchService.school = school;
    this.searchControl.setValue(school.name);
    console.log(school);
  }
  
  @HostListener('focusin') onFocusIn() {
    this.isFocused = true;
  }

  @HostListener('focusout') onFocusOut() {
    setTimeout(() => {
      this.isFocused = false;
    }, 100); // a small delay like 100ms
  }
  
}
