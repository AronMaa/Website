import {__decorate} from "tslib";
import {Component} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';

let LessonEditFormComponent = class LessonEditFormComponent {
  router;
  userSettingsService;
  formBuilder;
  title = '';
  description = '';
  category = '';
  level = 1;
  prerequisite = [];
  tags = [];
  copyright = '';
  lessonForm;

  constructor(router, userSettingsService, formBuilder) {
    this.router = router;
    this.userSettingsService = userSettingsService;
    this.formBuilder = formBuilder;
    console.log("Constructor called");
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }

  ngOnInit() {
    console.log("OnInit called");
  }

  ngOnDestroy() {
    console.log("OnDestroy called");
  }

  onClickSubmit() {
    /*// This could also trigger a backend save request if needed
    this.router.navigate(['lesson-list']).then(res => {
      console.log('Navigated to lesson-list:', res);
    });*/
    const formValues = {
      title: this.title,
      description: this.description,
      category: this.category,
      level: this.level,
      prerequisite: this.prerequisite,
      tags: this.tags,
      copyright: this.copyright
    };
    console.log('Form values to save to server:', formValues);
    this.userSettingsService.lastLessonId = 1234;
    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {
      console.log('Navigation result:', res);
    });
  }

  model = {
    title: '',
    description: '',
    category: '',
    level: 1,
    prerequisite: [],
    tags: [],
    copyright: ''
  };

  onClickSubmit2() {
    console.log('Form values to save to server:', this.model);
    this.userSettingsService.lastLessonId = 1234;
    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {
      console.log('Navigation result:', res);
    });
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
};
LessonEditFormComponent = __decorate([
  Component({
    selector: 'app-lesson-edit-form',
    standalone: true,
    imports: [
      NgbTooltip,
      FormsModule,
      ReactiveFormsModule,
      NgIf
    ],
    templateUrl: './lesson-edit-form.component.html',
    styleUrl: './lesson-edit-form.component.css'
  })
], LessonEditFormComponent);
export {LessonEditFormComponent};
//# sourceMappingURL=lesson-edit-form.component.js.map
