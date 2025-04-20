import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clientsList: People[] = [
    {
      name: 'John Doe',
      email: 'JDoe3@gmail.com',
      address: '123 Main St',
      password: 'password123',
      repeatPassword: 'password123'
    },
    {
      name: 'Jane Smith',
      email: 'JSmith@gmail.com',
      address: '456 Elm St',
      password: 'password456',
      repeatPassword: 'password456'
    },
    {
      name: 'Alice Johnson',
      email: 'AJohsnon@gmail.com',
      address: '789 Oak St',
      password: 'password789',
      repeatPassword: 'password789'
      }
  ]

constructor() { }
}
