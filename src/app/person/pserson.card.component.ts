import { Component, Injectable, Input } from '@angular/core';
import { Person } from '../person.modle';
import { PersonViewServicesService } from './person-view-services.service';

@Component({
  selector: 'person-card',
  templateUrl: './person.card.component.html',
  styleUrls: ['./person.card.component.css'],
})


export class PersonCard {
  panelOpenState = false;
  @Input() person = new Person();
  constructor(public personService:PersonViewServicesService){

  }
  goToProfilePage(){
    this.personService.person = this.person;
  }
}
