import { EventPageComponent } from './pages/event-page/event-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OotdComponent } from './pages/ootd-page/ootd.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'outfit-of-the-day', component: OotdComponent},
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'event', component: EventPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
