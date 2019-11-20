import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData: Client
  constructor() { }
}
