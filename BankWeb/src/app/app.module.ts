import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ClientsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
