import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
  styleUrl: './lesson-detail-page.component.css'
})
export class LessonDetailPageComponent {
  readonly initialId: number; // The ID when the component was first loaded
  id: number | undefined;     // The current dynamic ID

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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
}
