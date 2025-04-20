import { Component, inject } from '@angular/core';
import { People } from '../people';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  client: People = {
    name: 'Enter Name',
    email: 'Enter Email',
    address: 'Enter Address',
    password: 'Enter Password',
    repeatPassword: 'Repeat Password'
  }

  clientsService = inject(ClientsService);

  clientsList: People[] = this.clientsService.clientsList;

  addClient(client: People) {
    const newClient: People = {
      name: client.name,
      email: client.email,
      address: client.address,
      password: client.password,
      repeatPassword: client.repeatPassword
    }
    if (this.client.password !== this.client.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    this.clientsList.push(newClient);
    console.log(this.clientsList);
  }
}
