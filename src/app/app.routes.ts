import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { GaleriesComponent } from './feature/galeries/galeries.component';

export const routes: Routes = [
  {path :'' , redirectTo: 'home',pathMatch:'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'galeries' , component : GaleriesComponent},

];
