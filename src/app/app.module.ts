import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonCard } from './person/pserson.card.component';
import { PersonPanel } from './person/person.panel.component';
import { PersonProfile } from './person/person.profile.component';
import { AppBar } from './bar/app.bar.component';
import { test } from './person/test.component';
import { test1 } from './test1.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {ContactUs} from './contctus/contactUs.component';
import { HeaderComponent } from './header/header.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { PersonProfilePageComponent } from './person-profile-page/person-profile-page.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCard,
    PersonPanel,
    PersonProfile,
    AppBar,
    ContactUs,
    test,
    test1,
    HeaderComponent,
    PersonProfilePageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NoopAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
