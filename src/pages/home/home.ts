import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core';
import { HomeService } from './home.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage implements OnInit{
  data = {};
  constructor(public navCtrl: NavController,private homeService:HomeService,private http:Http) {
  }

  ngOnInit(): void {
    console.log('homepage init');    
  }
 
  clickNews():void {
    console.log('click news');
    this.http.get('/mvapi/mobile/sharelink').toPromise().then(function(result){
      console.log(result);
    })
  }

}
