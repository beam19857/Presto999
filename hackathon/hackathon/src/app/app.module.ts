import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoniterComponent } from './moniter/moniter.component';
import {MatInputModule} from '@angular/material/input';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireModule} from 'angularfire2';
//import {MatListModule} from '@angular/material/list';
import '@firebase/firestore'

const Config = {
  apiKey: "AIzaSyC_Dkyj0M9gL4CbxpgO69XBpNh8HTHCYUU",
  authDomain: "prestorealtime.firebaseapp.com",
  databaseURL: "https://prestorealtime.firebaseio.com",
  projectId: "prestorealtime",
  storageBucket: "prestorealtime.appspot.com",
  messagingSenderId: "963606022492",
  appId: "1:963606022492:web:3991352b88f48b20"
};

@NgModule({
  declarations: [
    AppComponent,
    MoniterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    RouterModule, 
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoeT-HDSjn061M5kqO7zjfI-awASrSti8'
    }),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(Config),

    

  ],
  providers: [
    AngularFirestore

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
