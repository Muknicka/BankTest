import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  formData: Client;
  readonly path = 'http://localhost:59035/api';
  constructor(private http:HttpClient) { }

  postClient(formData:Client)
  {
    return this.http.post(this.path + '/Client',this.formData)
  }
}
