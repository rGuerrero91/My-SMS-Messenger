import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from './services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'mysms-client';

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    console.log('Logging out...');
  this.authService.logout()
    .then(() => this.router.navigate(['/']))
    .catch(err => console.error(err));
}

}
