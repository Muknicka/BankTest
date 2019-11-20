import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  constructor(private service:ClientService) { }

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

  onSubimit(form:NgForm)
  {
    this.service.postClient(form.value).subscribe(
      res =>{
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )

  }

}
