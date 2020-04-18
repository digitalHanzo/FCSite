//Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './views/contact/contact.component';
import { SkillsComponent } from './views/skills/skills.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'skills', component:SkillsComponent},
    {path: 'contacto', component:ContactComponent},
    {path: '**', component: ErrorComponent},

];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];

//establecer todas las rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);