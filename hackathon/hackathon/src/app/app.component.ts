import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {AngularFirestore} from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import 'firebase/firestore';


export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);

  });
    return returnArr; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackathon';
  lat = 14.876359;
  lng = 102.021017;
  data ;

  constructor(public db : AngularFireDatabase , aft: AngularFirestore) {
 


        this.temp1 = db.list('/ESP32_Test/temp/');
        this.temp2 = this.temp1.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

      this.hum1 = db.list('/ESP32_Test/hum/');
      this.hum2 = this.hum1.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.tempStatus1 = db.list('/ESP32_Test/TEMP_STATUS/');
    this.tempStatus2 = this.tempStatus1.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );



      this.check()
   }

   

  temp1 : AngularFireList<any>  ;
  temp2 : Observable<any[]>;
  hum1 : AngularFireList<any> = null ;
  hum2 : Observable<any[]>;
  tempStatus1 : AngularFireList<any> = null ;
  tempStatus2 : Observable<any[]>;
  humStatus1 : AngularFireList<any> = null ;
  humStatus2 : Observable<any[]>;
  newTask = {name: ''};
  temp : number ;
  hum : number ;
  place : string ;
  long = 14.876359;
  la = 102.021017 ;
  status : string ;
  
 
  
  

  ngOnInit() {
    this.temp = 36 ;
    this.hum = 20 ;
    this.place = "ป่า  มทส."
    this.status = "Good" ;

    

  }

  check(){
    console.log(this.temp2);
  }


}
