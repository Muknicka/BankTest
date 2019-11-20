import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit {

  constructor(private service:ClientService, private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    this.service.getCountryList();
  }

}
