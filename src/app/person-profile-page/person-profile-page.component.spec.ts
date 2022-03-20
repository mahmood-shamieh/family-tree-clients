import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfilePageComponent } from './person-profile-page.component';

describe('PersonProfilePageComponent', () => {
  let component: PersonProfilePageComponent;
  let fixture: ComponentFixture<PersonProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
