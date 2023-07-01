import { Component, ViewChild } from '@angular/core';
import { DaisyModalComponent } from '../daisy-modal/daisy-modal.component';

@Component({
  selector: 'app-daisy-navbar',
  templateUrl: './daisy-navbar.component.html',
  styleUrls: ['./daisy-navbar.component.css']
})
export class DaisyNavbarComponent {
  @ViewChild('loginModal') loginModal!: DaisyModalComponent;
  @ViewChild('signupModal') signupModal!: DaisyModalComponent;

  ngAfterViewInit() {
    // Make sure modal is defined
    console.log(this.loginModal);
  }

  openLoginModal() {
    this.loginModal.openModal();
  }

  openSignupModal() {
    this.signupModal.openModal();
  }
}
