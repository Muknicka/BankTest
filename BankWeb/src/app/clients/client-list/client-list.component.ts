import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: []
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
