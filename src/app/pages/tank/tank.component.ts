import { Component, OnInit } from '@angular/core';
//import { tick } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/compat/database';
//import { start } from 'repl';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css'],
})
export class TankComponent implements OnInit {

  seccion: 'auto' | 'manual' | 'test' = 'auto';
  mediciones: string
  tds: string
  nivel:string 
  ph: string

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
  }

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
