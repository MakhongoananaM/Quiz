import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SportsPage } from '../sports/sports';

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
  Question1;
  Question2;
  Question3;
  Question4;
  Question5;
 
 count1=0;
 count2=0;
 count3=0;
 count4=0;
 count5=0;
 total=0;
  // function () {
    Start(){
   console.log(this.Question1)
   if(this.Question1=="pic"){
     this.count1=this.count1 +20;
     console.log(this.count1);
   }
   else{
    this.count1=0;
    console.log(this.count1);
 
   }
 
   console.log(this.Question2)
   if(this.Question2=="moz"){
     this.count2=this.count2 +20;
     console.log(this.count2);
   }
   else{
    this.count1=0;
    console.log(this.count2);
 
   }
   console.log(this.Question3)
   if(this.Question3=="pis"){
     this.count3=this.count3 +20;
     console.log(this.count3);
   }
   else{
    this.count1=0;
    console.log(this.count3);
 
   }
   console.log(this.Question4)
   if(this.Question4=="papr"){
     this.count4=this.count4 +20;
     console.log(this.count4);
   }
   else{
    this.count4=0;
    console.log(this.count4);
 
   }
 
   console.log(this.Question5)
   if(this.Question5=="ric"){
     this.count5=this.count5 +20;
     console.log(this.count5);
   }
   else{
    this.count5=0;
    console.log(this.count5);
 
   }  
 
       this.total=this.total + this.count1 + this.count2 + this.count3 + this.count4 + this.count5;
        console.log(this.total);
      //  if(this.total==5){
 
           if(this.total==100){
 
            const alert = this.alertCtrl.create({
              title: 'congratulation!',
              subTitle: this.total+'%,You know all your Colors!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(SportsPage)
          }
 
           else{
 
            const alert = this.alertCtrl.create({
              title: 'Sorry!',
              subTitle: this.total+'% Please learn more, try again!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(FoodPage)
          }
          
      }
 
 
     }

