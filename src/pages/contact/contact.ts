import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  contacts = [
    {name:'zxh1',phone:'13141240565',icon:'ionic'},
    {name:'zxh2',phone:'13141240565',icon:'ionic'},
    {name:'zxh3',phone:'13141240565',icon:'ionic'}
  ]

}
