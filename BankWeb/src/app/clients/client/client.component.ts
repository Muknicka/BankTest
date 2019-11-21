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
      id: 0,
      nome: '',
      documento: '', 
      endereco: '',
      complemento: '',
      country: ''
    }
  }

  onSubmit(form:NgForm)
  {
    if(this.service.formData.id==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);  
  }

  insertRecord(form: NgForm){
    this.service.postClient().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Cadastro enviado com sucesso', 'Cadastro de Clientes');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putClient().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.info('Cadastro atualizado com sucesso', 'Cadastro de Clientes');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
