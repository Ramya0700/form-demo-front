import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NotificationService } from "../shared/notification.service";

import { Student } from "../shared/student-register";
import { StudentRegisterService } from "../shared/student-register.service";

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: [`./student-list.component.css`]
})
export class StudentListComponent implements AfterViewInit {


  people: Student[] = [];
  pageTitle: string = 'STUDENTS-DETAILS'
  ELEMENT_DATA: Student[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber', 'course','actions'];
  dataSource = new MatTableDataSource<Student>(this.ELEMENT_DATA);


  constructor(private studentRegisterService: StudentRegisterService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.refreshPeople()
  }

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refreshPeople() {
    this.studentRegisterService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
        this.dataSource.data = data as Student[];
      })
  }

  


  deleteStudent(id: number) {
    if (window.confirm('want to delete this student?')) {
      this.studentRegisterService.deleteStudent(id)
        .subscribe(
          data => {
            console.log(data);
            this.refreshPeople();
            this.dataSource.data = data as Student[];
            this.notificationService.warn('! Deleted successfully');
          },
          error => console.log(error));
    }
  }
}