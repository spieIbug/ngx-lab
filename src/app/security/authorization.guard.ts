import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRoles: string[] = route.data.roles;
    const isAuthorized = this.authService.hasRole(requiredRoles);
    if (!isAuthorized) {
      this.router.navigate(['/']);
      return false;
    }
    return isAuthorized;
  }

}
