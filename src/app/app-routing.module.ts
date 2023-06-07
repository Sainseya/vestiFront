import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OfdtComponent } from './pages/odtd/ofdt.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'outfit-of-the-day', component: OfdtComponent},
  {path: 'welcome-page', component: WelcomePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
