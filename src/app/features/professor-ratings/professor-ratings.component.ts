import { Component } from '@angular/core';
import { Professor } from '@app/core/models/professor';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './professor-ratings.component.html',
  styleUrls: ['./professor-ratings.component.css']
})
export class ProfessorRatingsComponent {
  professor$!: Observable<Professor>;

  // Inject the ActivatedRoute and ProfessorService into the constructor
  constructor() {}

  ngOnInit() {
    // Get the professor id from the route parameters
    // Use the professor id to get the professor from the ProfessorService
  }
}
