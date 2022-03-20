import { Component, OnInit } from '@angular/core';
import { Person } from '../person.modle';
import { PersonViewServicesService } from '../person/person-view-services.service';

@Component({
  selector: 'app-person-profile-page',
  templateUrl: './person-profile-page.component.html',
  styleUrls: ['./person-profile-page.component.css'],
})
export class PersonProfilePageComponent implements OnInit {
  person = new Person();
  num = ['1','2','3','4','5'];
  constructor(public personService: PersonViewServicesService) {
    this.person = personService.person;
  }

  ngOnInit(): void {}
}
