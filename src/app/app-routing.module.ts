import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the required components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { HomeComponent } from './assets/home/home.component';
import { AboutComponent } from './assets/about/about.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
