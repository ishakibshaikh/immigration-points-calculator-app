import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  msgs: Message[] = [];
  constructor() { }

  ngOnInit() {
  }

  public submitDetailsClientHandler() {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Client details submitted'});
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }

}
