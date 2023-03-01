import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'event/:id', component: SingleEventComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SingleEventComponent,
    AddEventComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

