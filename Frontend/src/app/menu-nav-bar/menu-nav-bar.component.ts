import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './menu-nav-bar.component.html',
  styleUrl: './menu-nav-bar.component.css'
})
export class MenuNavBarComponent {
  isLoggedIn = false;
  faHome = faHome;

  logout() {
    // Logic to log the user out
    this.isLoggedIn = false;
    console.log('User logged out');
  }
}
