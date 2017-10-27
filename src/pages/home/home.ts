import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private fcm: FCM,private platform:Platform) {
    
  }

  async  onNotifications(){
    try {
      await this.platform.ready();
      await this.fcm.onNotification().subscribe(data=>{
        console.log(data)
        alert(data);
      })      
    } catch (error) {
      console.log(error)
    }
  }
    
  

}
