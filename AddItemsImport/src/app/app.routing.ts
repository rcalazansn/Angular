import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);