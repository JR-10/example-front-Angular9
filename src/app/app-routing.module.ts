import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}, // Cuando esta el path vacio  la ruta la redirecciona al home
  { path: '**', pathMatch: 'full', redirectTo: 'home'}, // Cuando no encuentra la ruta la redirecciona al home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
