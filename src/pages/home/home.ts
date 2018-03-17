import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SweettablePage } from '../sweettable/sweettable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  seleccion(tipo){
    let data={}
    switch(tipo){
      case 1:
      data = {
        name:'Selección de dulces',
        state:'CDMX',
        about:'Contamos con un equipo experto en selección de dulces',
        facebook:null,
        image: "assets/imgs/candy.jpg",
        phone:'551234-5678'
      }
      break;
      case 2:
      data = {
        name:'Diferentes tipos',
        state:'CDMX',
        about:'Diversos tipos de dulces a elegir',
        facebook:null,
        image: "assets/imgs/caramel.jpg",
        phone:'551234-5678'
      }
      break;
      case 3:
      data = {
        name:'Contenedores',
        state:'CDMX',
        about:'Contenedores de dulces de la mas alta calidad, nos ajustamos al que usted necesite',
        image: "assets/imgs/caramel2.jpg",
        facebook:null,
        phone:'551234-5678'
      }
      break;
      case 4:
      data = {
        name:'Repostería fina',
        state:'CDMX',
        about:'Repostería fina para los gustos mas exigentes',
        image: "assets/imgs/paletas.jpg",
        facebook:null,
        phone:'551234-5678'
      }
      break;
      case 5:
      break;
      default:
        data={
          name:null,
          state:null,
          about:null,
          facebook:null,
          phone:null
        }
      break;
    }
    console.log(data)
    this.navCtrl.push(SweettablePage,{'data':data})
  }
}

