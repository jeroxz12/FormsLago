import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students/components/students-page/students-page.component';
import { StudentsListComponent } from './students/components/students-list/students-list.component';
import { StudentsFormComponent } from './students/components/students-form/students-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    StudentsListComponent,
    StudentsFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
