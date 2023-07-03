import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
