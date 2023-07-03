import { Component, ViewChild } from '@angular/core';
import { DaisyModalComponent } from '../daisy-modal/daisy-modal.component';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@app/core/models/user';

@Component({
  selector: 'app-daisy-navbar',
  templateUrl: './daisy-navbar.component.html',
  styleUrls: ['./daisy-navbar.component.css']
})
export class DaisyNavbarComponent {
  user$: Observable<User | null> = this.auth.user$;
  isLogged$: Observable<boolean> = this.auth.isLogged$;

  @ViewChild('loginModal') loginModal!: DaisyModalComponent;
  @ViewChild('signupModal') signupModal!: DaisyModalComponent;

  constructor(private auth: AuthService) { }

  openLoginModal() {
    this.loginModal.openModal();
  }

  openSignupModal() {
    this.signupModal.openModal();
  }

  onLogoutClick() {
    this.auth.logout();
  }
}
