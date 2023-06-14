import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../shared/student-register';
import { StudentRegisterService } from '../shared/student-register.service';

@Component({
  selector: 'app-student-detail',
  templateUrl:'./student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  
  pageTitle:string='STUDENT INFO'

  
  student: Student = new Student;
  id!: number; 

  constructor(private route:ActivatedRoute,
              private router: Router,
              private studentRegisterService:StudentRegisterService){}

  ngOnInit(): void {
    
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];
    
    this.studentRegisterService.getStudent(this.id).subscribe(data => {
      console.log(data)
      this.student = data;
    }, error => console.log(error));
  }

 
  list():void{
    this.router.navigate(['/people/list']);
  }
 
  
}


// iconRegistry:MatIconRegistry,
// sanitizer:DomSanitizer) { 
//   iconRegistry.addSvgIconSet(
//     sanitizer.bypassSecurityTrustResourceUrl('assets/images/avatars.svg')
//   );
// }<mat-icon svgIcon="{{student.avatars}}"></mat-icon>