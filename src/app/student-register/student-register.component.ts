import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Student } from '../shared/student-register';
import { StudentRegisterService } from '../shared/student-register.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  student = new Student();
  static isDirty: any;
 
  constructor(private studentRegisterService: StudentRegisterService,private router:Router
    ,public dialog: MatDialog,private notificationService: NotificationService,) { }

  courses = [ 'Angular JS', 'React ', 'Java', 'Spring Boot','Java Micro Services','c++','c','typecript']
  options: string[] = ['Female', 'Male', 'Others'];
  isDirty:boolean=true

  onSubmit(form: NgForm) {
    console.log('submit', form.valid)
    
  }

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople() {
    this.studentRegisterService.getPeople();
  }

  addStudent() {
    this.notificationService.success('! Registered successfully');
    this.studentRegisterService.addStudent(this.student)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })
      
      this.isDirty=false
      this.router.navigate(['/home'])
  }

  warn(){
    this.notificationService.warn('! Not Completed');
  
  }
}




