import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {
    setInterval(() => {
      this.send2Server();
    }, 2000);
  }

  @ViewChild("myInputText") inputText;

  title = "app";

  send2Server() {
    let data = this.inputText.nativeElement;
    console.log(data.value);
  }
}
