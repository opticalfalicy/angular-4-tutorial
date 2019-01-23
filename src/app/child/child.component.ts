import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input("myValue") myLameValue;
  @Output() myOutputValue = new EventEmitter();

  ngOnInit() {
    console.log(this.myLameValue, "is it");
    this.myOutputValue.emit("hello from the child");
  }
}
