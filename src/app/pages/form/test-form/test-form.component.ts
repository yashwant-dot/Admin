import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-form",
  templateUrl: "./test-form.component.html",
  styleUrls: ["./test-form.component.scss"],
})
export class TestFormComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Forms" },
      { label: "Add Stratergy", active: true },
    ];
  }
}
