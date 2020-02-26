import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {


  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles: string[] = route.data.roles;
    const isAuthorized = this.authService.hasRole(roles);
    if (!isAuthorized) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
