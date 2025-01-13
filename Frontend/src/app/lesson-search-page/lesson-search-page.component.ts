import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-lesson-search-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './lesson-search-page.component.html',
  styleUrl: './lesson-search-page.component.css'
})
export class LessonSearchPageComponent {
  isAdvancedSearch: boolean = false;

  toggleAdvancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
}
