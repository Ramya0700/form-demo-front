import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentRegisterService } from '../shared/student-register.service';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const id=Number(route.paramMap.get('id'))
      if (isNaN(id) || id < 1){
      this.router.navigate(['/404']);
      return false;
    }
      return true;
  }

}




