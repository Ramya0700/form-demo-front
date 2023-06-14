import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './login/authenication.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle:string='Learners Platform'
  title = 'form-demo';
  isLoggedIn = false;

  constructor(private elementRef: ElementRef,
    private authenticationService: AuthenticationService){
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#92a8d1';
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('home ->' + this.isLoggedIn);
 }

 handleLogout() {
    this.authenticationService.logout();
  }

}

// #afb3c5


// #98B4D4