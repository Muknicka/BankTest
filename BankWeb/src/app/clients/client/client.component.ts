import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  constructor(private service:ClientService, private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      ID: 0,
      Nome: '',
      Documento: '', 
      Endereco: '',
      Complemento: '',
      Country: ''
    }
  }

  onSubmit(form:NgForm)
  {
    this.service.postClient(form.value).subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Cadastro enviado com sucesso', 'Cadastro de Clientes');
      },
      err => {
        console.log(err);
      }
    )

  }

}
