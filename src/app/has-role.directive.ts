import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {

  @Input()
  appHasRole: string;

  constructor(private templateRef: TemplateRef<string>,
              private viewContainerRef: ViewContainerRef,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    const hasRole = this.authService.hasRole(this.appHasRole);
    if (hasRole) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }

  }


}
