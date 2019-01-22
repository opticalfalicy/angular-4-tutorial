import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  visible = false;
  counter = 0;
  toggleDiv() {
    // this.visible = !this.visible;
    this.counter++;
  }
}
