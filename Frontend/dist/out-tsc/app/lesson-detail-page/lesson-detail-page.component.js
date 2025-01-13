import {__decorate} from "tslib";
import {Component} from '@angular/core';

let LessonDetailPageComponent = class LessonDetailPageComponent {
  activatedRoute;
  router;
  initialId; // The ID when the component was first loaded
  id; // The current dynamic ID
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    // Get the initial ID from the route snapshot
    this.initialId = +activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);
    // Subscribe to changes in route parameters
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  // Navigate to the next lesson by incrementing the ID
  onClickGoNextPage() {
    const nextId = this.id ? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
  }
};
LessonDetailPageComponent = __decorate([
  Component({
    selector: 'app-lesson-detail-page',
    standalone: true,
    imports: [],
    templateUrl: './lesson-detail-page.component.html',
    styleUrl: './lesson-detail-page.component.css'
  })
], LessonDetailPageComponent);
export {LessonDetailPageComponent};
//# sourceMappingURL=lesson-detail-page.component.js.map
