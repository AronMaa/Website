import {__decorate} from "tslib";
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MenuNavBarComponent} from './menu-nav-bar/menu-nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

let AppComponent = class AppComponent {
  title = 'td3';

  constructor() {
    console.log('AppComponent.constructor()');
  }

  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }

  ngOnDestroy() {
    console.log('AppComponent.ngOnDestroy()');
  }
};
AppComponent = __decorate([
  Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,
      RouterLink,
      MenuNavBarComponent,
      FormsModule,
      ReactiveFormsModule,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
], AppComponent);
export {AppComponent};
//# sourceMappingURL=app.component.js.map
