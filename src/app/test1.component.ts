import { Component } from '@angular/core';
import { Person } from './person.modle';
import { PersonViewServicesService } from './person/person-view-services.service';

@Component({
  selector: 'test1',
  styleUrls:['./test1.component.css'],
  templateUrl: './test1.component.html',
})
export class test1 {
  constructor(public personService : PersonViewServicesService){}
  person = {
    name: 'علاء حمشو',
    birthCity: 'دمشق',
    birthDate:'20/2/2000',
    currentCity: 'حمص',
    gender: 'ذكر',
    job: 'تاجر منسوجات',
    location: 'المزة',
    phone: '09822*****',
    pic:'assets/male.png',
  };
  persons: Person[] = [
    {
      name: 'علاء حمشو',
      birthCity: 'دمشق',
      birthDate:'20/2/2000',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/male.png',
    },
    {
      name: 'هناء حمشو',
      birthCity: 'دمشق',
      birthDate: '20/4/2005',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/female.png',
    },
    {
      name: 'علاء حمشو',
      birthCity: 'دمشق',
      birthDate: '1/1/1990',
      currentCity: 'حمص',
      deathDate: '20/2/2005',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/male.png',
    },
    {
      name: 'دلال حمشو',
      birthCity: 'دمشق',
      birthDate: '1/1/1985',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/female.png',
    },
  ];
  goToProfilePage(person :Person){
    this.personService.person = person;
  }
}
