import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css'],
})
export class TankComponent implements OnInit {
  //Principal
  seccion: 'auto' | 'manual' | 'test' = 'auto';
  bot1: boolean = false;
  bot2: boolean = false;
  flt: boolean = false;
  rgl: boolean = false;

  //Visualizacion
  mediciones: string
  tds: string
  nivel:string 
  ph: string

  //Manual
  umbral: number = 25;
  umbral2: number = 700;
  umbral3: number = 7;

  modTemp = 0;
  modo: string = "auto";

  lamp1: string
  lamp2: string
  ind: string
  rgb: string

  constructor(public firedata: AngularFireDatabase) { 
    this.leerTemperatura();
    this.leerTds();
    this.leerNivel();
    this.leerPh();
  }

  ngOnInit() {}

  leerTemperatura() {
    const path = 'test/temp'
    this.firedata.object<string>(path).valueChanges().subscribe( valor1 => {
      console.log('test1 -> ', valor1); 
      this.mediciones = valor1;
    })
  }

  leerTds() {
    const path = 'test/tds'
    this.firedata.object<string>(path).valueChanges().subscribe( valor2 => {
      console.log('test2 -> ', valor2); 
      this.tds = valor2;
    })
  }

  leerNivel() {
    const path = 'test/nivel'
    this.firedata.object<string>(path).valueChanges().subscribe( valor3 => {
      console.log('test3 -> ', valor3); 
      this.nivel = valor3;
    })
  }

  leerPh() {
    const path = 'test/ph'
    this.firedata.object<string>(path).valueChanges().subscribe( valor4 => {
      console.log('test4 -> ', valor4); 
      this.ph = valor4;
    })
  }

  segmentChanged(evento: any) {
    this.seccion = evento.detail.value;
    console.log('evento.detail.value ->', evento.detail.value);
    
    if (evento.detail.value == "auto"){
      console.log("modo auto")
      const path = 'modo';
      this.firedata.object(path).set(this.modo);
      this.modo = this.seccion;;
      //this.firedata.object('modo').set(this.leerMods)
    }

    if (evento.detail.value == "manual"){
      console.log("modo manual")
      const path = 'modo';
      this.firedata.object(path).set(this.modo);
      this.modo = this.seccion;
      //this.firedata.object('modo').set(this.leerMods)
    }

    if (evento.detail.value == "test"){
      console.log("modo de prueba")
      const path = 'modo';
      this.firedata.object(path).set(this.modo);
      this.modo = this.seccion;;
      //this.firedata.object('modo').set(this.leerMods)
    }
    
  }

  rangeChange1(evento: any) {
    this.umbral = evento.detail.value;
    const path = 'config/umbral1';
    this.firedata.object(path).set(this.umbral);

  }

  rangeChange2(evento: any) {
    this.umbral2 = evento.detail.value;
    const path = 'config/umbral2';
    this.firedata.object(path).set(this.umbral2);
    
  }

  rangeChange3(evento: any) {
    this.umbral3 = evento.detail.value;
    const path = 'config/umbral3';
    this.firedata.object(path).set(this.umbral3);

  }

  botlamp1(evento: any){
    if(this.bot1){
      this.bot1 = false;
    }
    else{
      this.bot1 = true;
    }
    console.log(this.bot1);

    if(this.bot1 == true){
      this.lamp1 = "ON";
    }

    if(this.bot1 == false){
      this.lamp1 = "OFF";
    }
  }

  botlamp2(evento: any){
    if(this.bot2){
      this.bot2 = false;
    }
    else{
      this.bot2 = true;
    }
    console.log(this.bot2);

    if(this.bot2 == true){
      this.lamp2 = "ON";
    }

    if(this.bot2 == false){
      this.lamp2 = "OFF";
    }
  }
  
  fltint(evento: any){
    if(this.flt){
      this.flt = false;
    }
    else{
      this.flt = true;
    }
    console.log(this.flt);

    if(this.flt == true){
      this.ind = "ON";
    }

    if(this.flt == false){
      this.ind = "OFF";
    }
  }

  servo(evento: any){
    if(this.rgl){
      this.rgl = false;
    }
    else{
      this.rgl = true;
    }
    console.log(this.rgl);

    if(this.rgl == true){
      this.rgb = "ON";
    }

    if(this.rgl == false){
      this.rgb = "OFF";
    }
  }

  leerMods() {
    const path = 'valores/temp';
    this.firedata.object(path).set(0);
  }
/*
  lamp1Change(evento: any) {
    this.lamp1 = evento.detail.value;
    const path = 'lamp1';
    //if (this.lamp1Change == 'on'){

    //}
    this.firedata.object(path).set(this.umbral);
    this.lamp1 = this.lamp1;
    this.firedata.object('modo/lamp1').set(this.lamp1Change)
  }*/

}

interface Mediciones{
  temp: number;
}

interface Tds{
  tds: number;
}

interface Nivel{
  nivel: number;
}

interface Ph{
  ph: number;
}
