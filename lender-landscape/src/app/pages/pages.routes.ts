import { Routes } from '@angular/router';
import { BankmapComponent } from './bankmap/bankmap.component';
import { Dashboard } from './dashboard/dashboard';
import { HomeComponent } from './home/home.component';

export default [
    { path: '', data: { breadCrumb: 'Home'}, component: HomeComponent },
    { path: 'dashboard', data: { breadCrumb: 'Dashboard'}, component: Dashboard },
    { path: 'map', data: { breadCrumb: 'Map'}, component: BankmapComponent },
] as Routes;
