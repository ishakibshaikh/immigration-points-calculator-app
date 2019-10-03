import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/components/common/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "immigration-points-calculator";

  items: MenuItem[];
  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: "Immigration Points Calculators",
        icon: "fa fa-fw fa-check",
        items: [
          [
            {
              label: "Calculators",
              items: [
                {
                  label: "Australia Calculator",
                  command: event => {
                    this.australiaMenuClickHandler();
                  }
                },
                {
                  label: "Canada Calculator",
                  command: event => {
                    this.canadaMenuClickHandler();
                  }
                }
              ]
            }
          ]
        ]
      }
    ];
  }

  private australiaMenuClickHandler() {
    this.router.navigateByUrl("/australia-calculator");
  }

  private canadaMenuClickHandler() {
    this.router.navigateByUrl("/canada-calculator");
  }
}
