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
  posts=[];
  constructor(public navCtrl: NavController,private homeService:HomeService,private http:Http) {
     console.log('homepage constructor');       
    
  }
   
  ngOnInit(): void {
    console.log('homepage init'); 
     this.http.get('/api/posts').subscribe(res=>{
      var newposts =  res.json()._embedded.posts
      console.log(newposts);
      this.posts = newposts;
    },err => console.log(err))
  }
 
  addNewPost():void {
    console.log('click news');
    this.http.post('/api/posts',{
      title:'hello,test',
      raw_url:'http://cdn-qn0.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png',
      buy_url:'https://www.jd.com',
      submit_time:new Date()
    }).toPromise().then(function(result){
      console.log(result);
    },function(err){
      console.log(err);
    })
  }

}
