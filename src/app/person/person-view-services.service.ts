import { Person } from './../person.modle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonViewServicesService {
  person = new Person();

  constructor() { }
}
