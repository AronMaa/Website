import {__decorate} from "tslib";
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

let LessonListPageComponent = class LessonListPageComponent {
  userSettingsService;

  constructor(userSettingsService) {
    this.userSettingsService = userSettingsService;
    console.log("get lastLessonId:", userSettingsService.lastLessonId);
  }
};
LessonListPageComponent = __decorate([
  Component({
    selector: 'app-lesson-list-page',
    standalone: true,
    imports: [
      RouterLink
    ],
    templateUrl: './lesson-list-page.component.html',
    styleUrl: './lesson-list-page.component.css'
  })
], LessonListPageComponent);
export {LessonListPageComponent};
//# sourceMappingURL=lesson-list-page.component.js.map
