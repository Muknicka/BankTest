import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient} from "@angular/common/http";
import { Country } from './country.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  formData: Client;
  readonly path = 'http://localhost:59035/api';
  list: Client[];
  countryList: Country[];

  constructor(private http:HttpClient) { }

  postClient(formData:Client)
  {
    return this.http.post(this.path + '/Client',this.formData);
  }

  refreshList(){
    this.http.get(this.path + '/Client')
    .toPromise()
    .then(res =>this.list = res as Client[]);
  }

  getCountryList(){
    this.http.get(this.path + '/countries')
    .subscribe(
      res =>
      {this.countryList = res as Country[]}, error => console.error(error)
    );
  }
}
