import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pageTitle = 'WELCOME LEARNERS!!!';

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  list(){
    this.router.navigate(['/register']);
  }

  
  
}


//card example
// <!--Grid row-->
// <div class="row">

//   <!--Grid column-->
//   <div class="col-md-6">

//     <mdb-card class="testimonial-card">
//       <!--Bacground color-->
//       <div class="card-up indigo lighten-1">
//       </div>

//       <!--Avatar-->
//       <div class="avatar mx-auto">
//         <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle">
//       </div>

//       <mdb-card-body>
//         <!--Name-->
//         <mdb-card-title>
//           <h4>Anna Doe</h4>
//         </mdb-card-title>
//         <hr>
//         <!--Quotation-->
//         <p>
//           <mdb-icon fas icon="quote-left"></mdb-icon> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
//           adipisci</p>
//       </mdb-card-body>
//     </mdb-card>

//   </div>
//   <!--Grid column-->


// </div>
// <!--Grid row-->