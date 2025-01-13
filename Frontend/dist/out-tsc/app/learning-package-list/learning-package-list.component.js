import {__decorate} from "tslib";
import {Component, inject} from '@angular/core';
import {LearningPackageService} from '../learning-package.service';
import {CommonModule} from '@angular/common';
import {DefaultService} from '../../typescript-angular-client-generated';

let LearningPackageListComponent = class LearningPackageListComponent {
  learningPackageService = inject(LearningPackageService);
  learningPackageApiService = inject(DefaultService);
  packages = [];

  onClickReload() {
    this.learningPackageService.getAll().subscribe({
      next: (data) => {
        console.log('Finished loading Todos, saving to component field');
        this.packages = data;
      },
      error: (err) => {
        console.error('Failed to load Todos from Http server', err);
      },
    });
  }
};
LearningPackageListComponent = __decorate([
  Component({
    selector: 'app-learning-package-list',
    templateUrl: './learning-package-list.component.html',
    styleUrls: ['./learning-package-list.component.css'],
    imports: [
      CommonModule
    ],
    standalone: true
  })
], LearningPackageListComponent);
export {LearningPackageListComponent};
//# sourceMappingURL=learning-package-list.component.js.map
