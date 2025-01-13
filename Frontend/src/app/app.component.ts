import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MenuNavBarComponent} from './menu-nav-bar/menu-nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {faBullseye, faHome} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    MenuNavBarComponent,
    FormsModule,
    ReactiveFormsModule, FaIconComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'td3';

  constructor() {
    console.log('AppComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()')
  }

  ngOnDestroy(): void {
    console.log('AppComponent.ngOnDestroy()')
  }

  protected readonly faHome = faHome;
  protected readonly faBullseye = faBullseye;
}
