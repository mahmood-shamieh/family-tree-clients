import { Component } from '@angular/core';
import { Person } from '../person.modle';

@Component({
  selector: 'person-panel',
  templateUrl: './person.panel.component.html',
  styleUrls: ['./person.panel.component.css'],
})
export class PersonPanel {
  statue = false;
  mother: Person = {
    name: 'دلال حمشو',
    birthCity: 'دمشق',
    birthDate: '1/1/1985',
    currentCity: 'حمص',
    gender: 'ذكر',
    job: 'تاجر منسوجات',
    location: 'المزة',
    phone: '09822*****',
    pic: 'assets/female.png',
  };
  father: Person = {
    name: 'هاني حمشو',
    birthCity: 'دمشق',
    birthDate: '20/2/2000',
    currentCity: 'حمص',
    gender: 'ذكر',
    job: 'تاجر منسوجات',
    location: 'المزة',
    phone: '09822*****',
    pic: 'assets/male.png',
    children: [
      {
        children: [
          {
            children: [
              {
                name: 'هاني حمشو',
                birthCity: 'دمشق',
                birthDate: '20/2/2000',
                currentCity: 'حمص',
                gender: 'ذكر',
                job: 'تاجر منسوجات',
                location: 'المزة',
                phone: '09822*****',
                pic: 'assets/male.png',
              },
            ],
            name: 'فراس حمشو',
            birthCity: 'دمشق',
            birthDate: '20/2/2000',
            currentCity: 'حمص',
            gender: 'ذكر',
            job: 'تاجر منسوجات',
            location: 'المزة',
            phone: '09822*****',
            pic: 'assets/male.png',
          },
          {
            name: 'رامي حمشو',
            birthCity: 'دمشق',
            birthDate: '20/2/2000',
            currentCity: 'حمص',
            gender: 'ذكر',
            job: 'تاجر منسوجات',
            location: 'المزة',
            phone: '09822*****',
            pic: 'assets/male.png',
          },{
            name: 'نزار حمشو',
            birthCity: 'دمشق',
            birthDate: '20/2/2000',
            currentCity: 'حمص',
            gender: 'ذكر',
            job: 'تاجر منسوجات',
            location: 'المزة',
            phone: '09822*****',
            pic: 'assets/male.png',
          },{
            name: 'سامي حمشو',
            birthCity: 'دمشق',
            birthDate: '20/2/2000',
            currentCity: 'حمص',
            gender: 'ذكر',
            job: 'تاجر منسوجات',
            location: 'المزة',
            phone: '09822*****',
            pic: 'assets/male.png',
          },{
            name: 'هاني حمشو',
            birthCity: 'دمشق',
            birthDate: '20/2/2000',
            currentCity: 'حمص',
            gender: 'ذكر',
            job: 'تاجر منسوجات',
            location: 'المزة',
            phone: '09822*****',
            pic: 'assets/male.png',
          },
        ],
        name: 'خالد حمشو',
        birthCity: 'دمشق',
        birthDate: '20/2/2000',
        currentCity: 'حمص',
        gender: 'ذكر',
        job: 'تاجر منسوجات',
        location: 'المزة',
        phone: '09822*****',
        pic: 'assets/male.png',
      },
      {
        name: 'سامي حمشو',
        birthCity: 'دمشق',
        birthDate: '20/2/2000',
        currentCity: 'حمص',
        gender: 'ذكر',
        job: 'تاجر منسوجات',
        location: 'المزة',
        phone: '09822*****',
        pic: 'assets/male.png',
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
        pic: 'assets/female.png',
      },
      {
        name: 'رامي حمشو',
        birthCity: 'دمشق',
        birthDate: '20/2/2000',
        currentCity: 'حمص',
        gender: 'ذكر',
        job: 'تاجر منسوجات',
        location: 'المزة',
        phone: '09822*****',
        pic: 'assets/male.png',
      },
    ],
  };
  refresh() {
    this.statue = !this.statue;
  }
}