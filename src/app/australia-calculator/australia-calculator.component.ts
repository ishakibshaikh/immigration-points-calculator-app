import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/components/common/api";

@Component({
  selector: "app-australia-calculator",
  templateUrl: "./australia-calculator.component.html",
  styleUrls: ["./australia-calculator.component.scss"]
})
export class AustraliaCalculatorComponent implements OnInit {
  constructor() {}

  items: MenuItem[];
  activeIndex: number = 0;

  ngOnInit() {
    this.items = [
      {
        label: "Client Details",
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: "Status Of Points",
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: "Application Status",
        command: (event: any) => {
          this.activeIndex = 2;
        }
      }
    ];
  }
}
