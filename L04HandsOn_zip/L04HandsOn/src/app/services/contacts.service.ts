import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
contacts: Contact[] = [
{
firstName: "Alfred",
lastName: "Planter",
phoneNumber: "234-345-4567",
emailAddress: "alfredtheplanter@gmail.com"
},

{
  firstName: "Brandon",
  lastName: "Beck",
  phoneNumber: "293-482-2342",
  emailAddress: "brandon.beck@yahoo.com"
  },
  {
    firstName: "Daisy",
    lastName: "Harvey",
    phoneNumber: "893-283-4583",
    emailAddress: "daisyharvey22@gmail.com"
    },
    {
      firstName: "Patrick",
      lastName: "Wilson",
      phoneNumber: "283-472-3891",
      emailAddress: "patrickwilson19@yahoo.com"
      }
];

  constructor() { }
}

