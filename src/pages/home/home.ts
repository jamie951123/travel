import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:string;
  constructor(private clipboard: Clipboard, public navCtrl: NavController) {

  }

  copy(){
    this.clipboard.copy(this.data);
  }
  paste(){
    this.clipboard.paste().then(
      (resolve: string) => {
         alert(resolve);
       },
       (reject: string) => {
         alert('Error: ' + reject);
       }
     );
  }
}
