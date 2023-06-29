import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { DaisyModalComponent } from './components/daisy-modal/daisy-modal.component';
import { DaisyNavbarComponent } from './components/daisy-navbar/daisy-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    FooterComponent,
    DaisyModalComponent,
    DaisyNavbarComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DaisyModalComponent,
    DaisyNavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
