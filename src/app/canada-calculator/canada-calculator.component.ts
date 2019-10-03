import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-canada-calculator',
  templateUrl: './canada-calculator.component.html',
  styles: [
    `
      .ui-steps .ui-steps-item {
        width: 25%;
      }

      .ui-steps.steps-custom {
        margin-bottom: 30px;
      }

      .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
        height: 10px;
        padding: 0 1em;
      }

      .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
        background-color: #0081c2;
        color: #ffffff;
        display: inline-block;
        width: 36px;
        border-radius: 50%;
        margin-top: -14px;
        margin-bottom: 10px;
      }

      .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
        color: #555555;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class CanadaCalculatorComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Client Details',
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Status Of Points',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Application Status',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      }
    ];
  }
}
