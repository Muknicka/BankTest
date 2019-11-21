import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { Client } from 'src/app/shared/client.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: []
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  bindForm(pd: Client){
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id)
  {
    if(confirm('Tem certeza que deseja deletar o cliente?')){
      this.service.deleteClient(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Payment Detail Register');
      },
        err => {
          debugger;
          console.log(err);
        });
    }
  }

}
