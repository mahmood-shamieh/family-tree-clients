import { MainPageComponent } from './main-page/main-page.component';
import { PersonProfilePageComponent } from './person-profile-page/person-profile-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'family-tree', component: MainPageComponent },
  { path: 'family-tree/test', component: PersonProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
