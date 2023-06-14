import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { AuthenticationService } from './authenication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  
  constructor(
    
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService:NotificationService
    ) {   }

  ngOnInit() {
  }
  
  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/people/list']);
      this.notificationService.success('! logged successfully');
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
    
}
