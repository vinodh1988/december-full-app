import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MyData } from '../models/mydata';
 // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class MyDataGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: Omit<ActivatedRouteSnapshot, 'data'> & { data: MyData },
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const hasAccess = this.checkAccess(route.data.value); // Custom logic based on MyData

    if (hasAccess) {
      return of(true);
    } else {
      return of(this.router.createUrlTree([''])); // Redirect to login if access is denied
    }
  }

  private checkAccess(value: string): boolean {
    // Replace this logic with your actual access check
    return value === 'allowed';
  }
}
