import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authService.getJWT();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });

    const cloneReq = req.clone({headers});

    return next.handle(cloneReq);
  }
}
