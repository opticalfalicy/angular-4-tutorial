import { Component, OnInit } from "@angular/core";
import { UserService } from "../user-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private user: UserService) {}

  name = "anonymous";

  ngOnInit() {
    console.log("is user logged in? ", this.user.getUserLoggedIn());
    this.name = this.user.username;
  }
}
