import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
selector: 'page-hello-ionic',
templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

data: Array<{ details: string, icon: string, showDetails: boolean}> = [];


 constructor(public navCtrl: NavController) {
     this.data.push({
         details: 'details dropdown',
         icon: 'ios-add-circle-outline',
         showDetails: false
       });
 }

 toggleDetails(data) {
   if (data.showDetails) {
       data.showDetails = false;
       data.icon = 'ios-add-circle-outline';
   } else {
       data.showDetails = true;
       data.icon = 'ios-remove-circle-outline';
   }
 }

public ionicNamedColor: string = 'light';

buttonClick(){
var count_string = document.getElementById('count').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count').textContent = (count_number + 1).toString();
}else{
document.getElementById('count').textContent = (count_number - 1).toString();
}

}


buttonClick1(){
var count_string = document.getElementById('count1').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count1').textContent = (count_number + 1).toString();
}else{
document.getElementById('count1').textContent = (count_number - 1).toString();
}
}

buttonClick2(){
var count_string = document.getElementById('count2').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count2').textContent = (count_number + 1).toString();
}else{
document.getElementById('count2').textContent = (count_number - 1).toString();
}
}

buttonClick3(){
var count_string = document.getElementById('count3').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count3').textContent = (count_number + 1).toString();
}else{
document.getElementById('count3').textContent = (count_number - 1).toString();
}
}

buttonClick4(){
var count_string = document.getElementById('count4').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count4').textContent = (count_number + 1).toString();
}else{
document.getElementById('count4').textContent = (count_number - 1).toString();
}
}

buttonClick5(){
var count_string = document.getElementById('count5').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count5').textContent = (count_number + 1).toString();
}else{
document.getElementById('count5').textContent = (count_number - 1).toString();
}
}

buttonClick6(){
var count_string = document.getElementById('count6').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count6').textContent = (count_number + 1).toString();
}else{
document.getElementById('count6').textContent = (count_number - 1).toString();
}
}

}
