import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonEditFormComponent} from './lesson-edit-form/lesson-edit-form.component';
import {LessonSearchPageComponent} from './lesson-search-page/lesson-search-page.component'; // Adjust the path if necessary
import {MenuNavBarComponent} from './menu-nav-bar/menu-nav-bar.component';
import {HomeComponent} from './home/home.component';
import {StudyNowComponent} from './study-now/study-now.component';
import {ProgressStatisticsComponent} from './progress-statistics/progress-statistics.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {ExploreLessonsComponent} from './explore-lessons/explore-lessons.component';
import {ImportComponent} from './import/import.component';
import {NewComponent} from './new/new.component';
import {ExportComponent} from './export/export.component';
import {GlossaryComponent} from './glossary/glossary.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {SettingsComponent} from './settings/settings.component';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import {TestPage1Component} from './test-page1/test-page1.component';
import {LearningPackageListComponent} from './learning-package-list/learning-package-list.component';

export const routes: Routes = [
  {path: 'lesson-edit', component: LessonEditFormComponent},
  {path: 'lesson-search', component: LessonSearchPageComponent},
  {path: 'menu-nav', component: MenuNavBarComponent},
  {path: '', component: HomeComponent},
  {path: 'study-now', component: StudyNowComponent},
  {path: 'progress-statistics', component: ProgressStatisticsComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'explore-lessons', component: ExploreLessonsComponent},
  {path: 'import', component: ImportComponent},
  {path: 'new', component: NewComponent},
  {path: 'export', component: ExportComponent},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'lesson-list', component: LessonListPageComponent},
  {path: 'lesson/:id', component: LessonDetailPageComponent},
  {path: 'test-page1', component: TestPage1Component},
  {path: 'learning-packages', component: LearningPackageListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
