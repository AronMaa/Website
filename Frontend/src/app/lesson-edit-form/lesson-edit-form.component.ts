import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserSettingsService} from "../user-settings.service";
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';

interface LessonPackage {
  title: string;
  description: string;
  category: string;
  level: number;
  prerequisite: string[];
  tags: string[];
  copyright: string;
}

@Component({
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

export class LessonEditFormComponent implements OnInit, OnDestroy {
  title: string = '';
  description: string = '';
  category: string = '';
  level: number = 1;
  prerequisite: string[] = [];
  tags: string[] = [];
  copyright: string = '';
  lessonForm!: FormGroup;

  constructor(
    private router: Router,
    private userSettingsService: UserSettingsService,
    private formBuilder: FormBuilder,
  ) {
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
    const formValues: LessonPackage = {
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
    })
  }

  model: LessonPackage = {
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
    })
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}
