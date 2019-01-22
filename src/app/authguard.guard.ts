import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user-service.service";
import { TouchSequence } from "selenium-webdriver";

@Injectable({
  providedIn: "root"
})
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.user.getUserLoggedIn();
  }
}
