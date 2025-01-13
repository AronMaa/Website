import {Component, inject} from '@angular/core';
import {LearningPackageService, LearningPackageDTO, LearningPackageModel} from '../learning-package.service';
import {CommonModule} from '@angular/common';
import {DefaultService} from '../../typescript-angular-client-generated';

@Component({
  selector: 'app-learning-package-list',
  templateUrl: './learning-package-list.component.html',
  styleUrls: ['./learning-package-list.component.css'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class LearningPackageListComponent {

  private readonly learningPackageService = inject(LearningPackageService);
  private readonly learningPackageApiService = inject(DefaultService);

  packages: LearningPackageDTO[] = [];

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
}
