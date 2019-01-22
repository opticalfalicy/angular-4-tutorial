import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user-service.service";
import { TouchSequence } from "selenium-webdriver";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.router.navigate(["/"]);
    alert("Invalid Login. You are not authenticated!");
    return this.user.getUserLoggedIn();
  }
}
