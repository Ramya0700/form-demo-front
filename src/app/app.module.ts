import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentDetailGuard } from './student-detail/student-detail.guard';
import { Error404Component } from './error/404.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './login/httpInterceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    StudentListComponent,
    StudentDetailComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      { path: '', pathMatch:'full', redirectTo: 'home'},
      {path:'register',component:StudentRegisterComponent,canDeactivate:['canDeactivateStudentRegister']},
      {path:'login',
      component:LoginComponent},
      {path:'logout',
      component:LoginComponent},
      {path:'people/list',component:StudentListComponent},
      {path:'details/:id',
      canActivate : [StudentDetailGuard], 
      component:StudentDetailComponent},
      {path:'404',component:Error404Component},
      {path: '**', redirectTo: '/404'}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {provide:'canDeactivateStudentRegister',useValue:checkDirtyState},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:StudentRegisterComponent){
  if(component.isDirty )
  return window.confirm('you have not submitted the form? want to leave this page')
  return true
}
