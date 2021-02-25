import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentAddValidateComponent } from './student-add-validate/student-add-validate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssueAddComponent } from './issue-add/issue-add.component';


const appRoutes: Routes = [
  {

    path: 'navbar',
    component: NavbarComponent,
    data: { title: 'Navbar' }
  },
  {

    path: 'issue-add',
    component: IssueAddComponent,
    data: { title: 'Issue Add'}
  },

  {

    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
  {
    path: 'student-add',
    component: StudentAddComponent,
    data: { title: 'Student Add' }
  },
  {
    path: 'student-detail/:studentId',
    component: StudentDetailComponent,
    data: { title: 'Student Details' }
  },
  {
    path: 'student-update/:studentId',
    component: StudentUpdateComponent,
    data: { title: 'Student Update' }
  },
  {
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: { title: 'Student Add Validate' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentUpdateComponent,
    StudentAddValidateComponent,
    NavbarComponent,
    IssueAddComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
