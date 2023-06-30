import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { DaisyModalComponent } from './components/daisy-modal/daisy-modal.component';
import { DaisyNavbarComponent } from './components/daisy-navbar/daisy-navbar.component';
import { ReactiveFormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DaisyOverlayHeroComponent } from './components/daisy-overlay-hero/daisy-overlay-hero.component';
import { SchoolSearchBarComponent } from './components/school-search-bar/school-search-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    DaisyModalComponent,
    DaisyNavbarComponent,
    LoginFormComponent,
    DaisyOverlayHeroComponent,
    SchoolSearchBarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DaisyModalComponent,
    DaisyNavbarComponent,
    FooterComponent,
    DaisyOverlayHeroComponent,
    SchoolSearchBarComponent,
  ],
  providers: [
    { provide: COMPOSITION_BUFFER_MODE, useValue: false }
  ]
})
export class SharedModule { }
