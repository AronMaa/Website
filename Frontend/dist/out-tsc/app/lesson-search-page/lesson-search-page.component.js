import {__decorate} from "tslib";
import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

let LessonSearchPageComponent = class LessonSearchPageComponent {
  isAdvancedSearch = false;

  toggleAdvancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
};
LessonSearchPageComponent = __decorate([
  Component({
    selector: 'app-lesson-search-page',
    standalone: true,
    imports: [
      NgIf
    ],
    templateUrl: './lesson-search-page.component.html',
    styleUrl: './lesson-search-page.component.css'
  })
], LessonSearchPageComponent);
export {LessonSearchPageComponent};
//# sourceMappingURL=lesson-search-page.component.js.map
