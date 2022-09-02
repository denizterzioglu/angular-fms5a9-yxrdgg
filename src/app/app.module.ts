import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: RequestFormComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'admin', component: AdminComponent }
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    RequestFormComponent,
    AuthComponent,
    AdminComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
