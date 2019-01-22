import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username = "swedishgoodbye";

  // changeUsername(event) {
  //   this.username = event.target.value;
  // }

  // title = "my-app";
  // visible = false;
  // counter = 0;
  // result = 2;
  // myCustomString = "";

  // constructor() {
  //   setTimeout(() => {
  //     this.result = 50;
  //   }, 2000);
  // }

  // myFunction(event) {
  //   this.myCustomString += event.target.value + "\n";
  // }

  // toggleDiv() {
  //   // this.visible = !this.visible;
  //   this.counter++;
  // }
  // myFavLang = [
  //   { name: "html", type: "frontend" },
  //   { name: "css", type: "frontend" },
  //   { name: "js", type: "frontend" },
  //   { name: "ruby", type: "backend" }
  // ];
}
