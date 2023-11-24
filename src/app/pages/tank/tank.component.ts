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
  bot1: number = 0;
  bot2: number = 0;
  flt: number = 0;
  rgl: number = 0;

  //Visualizacion
  mediciones: string
  tds: string
  nivel:string 
  ph: string

  //Manual
  umbral: number = 25;
  umbral2: number = 700;
  umbral3: number = 7;

 /* modTemp = 0;*/
  //modo: string = "auto";

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
    const path = 'modo';
    this.firedata.object(path).set(this.seccion);
    
  }

  botlamp1(evento: any){
    if(this.bot1){
      this.bot1 = 0;
      const path = 'config/bot1';
      this.firedata.object(path).set(this.bot1);
    }
    else{
      this.bot1 = 1;
      const path = 'config/bot1';
      this.firedata.object(path).set(this.bot1);
    }
    console.log('Lampara 1 ->', this.bot1);

    if(this.bot1 == 1){
      this.lamp1 = "ON";
    }

    if(this.bot1 == 0){
      this.lamp1 = "OFF";
    }
  }

  botlamp2(evento: any){
    if(this.bot2){
      this.bot2 = 0;
      const path = 'config2/bot2';
      this.firedata.object(path).set(this.bot2);
    }
    else{
      this.bot2 = 1;
      const path = 'config2/bot2';
      this.firedata.object(path).set(this.bot2);
    }
    console.log('Lampara 2 ->', this.bot2);

    if(this.bot2 == 1){
      this.lamp2 = "ON";
    }

    if(this.bot2 == 0){
      this.lamp2 = "OFF";
    }
  }
  
  fltint(evento: any){
    if(this.flt){
      this.flt = 0;
      const path = 'config3/filtro';
      this.firedata.object(path).set(this.flt);
    }
    else{
      this.flt = 1;
      const path = 'config3/filtro';
      this.firedata.object(path).set(this.flt);
    }
    console.log('Filtro ->',this.flt);

    if(this.flt == 1){
      this.ind = "ON";
    }

    if(this.flt == 0){
      this.ind = "OFF";
    }
  }

  servo(evento: any){
    if(this.rgl){
      this.rgl = 0;
      const path = 'config4/servo';
      this.firedata.object(path).set(this.rgl);
    }
    else{
      this.rgl = 1;
      const path = 'config4/servo';
      this.firedata.object(path).set(this.rgl);
    }
    console.log('Bomba ->',this.rgl);

    if(this.rgl == 1){
      this.rgb = "ON";
    }

    if(this.rgl == 0){
      this.rgb = "OFF";
    }
    
  }

  /*leerMods() {
    const path = 'valores/temp';
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
