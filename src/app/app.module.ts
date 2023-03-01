import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { LoginComponent } from './login/login.component';
import { EditEventComponent } from './edit-event/edit-event.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event', component: EditEventComponent },
  { path: 'event/:id', component: SingleEventComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SingleEventComponent,
    AddEventComponent,
    LoginComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

