import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css'],
})
export class TankComponent implements OnInit {

  seccion: 'auto' | 'manual' | 'test' = 'auto';
  mediciones: Mediciones[] = [];

  constructor(public firedata: AngularFireDatabase) { 
    this.leerMediciones();
  }

  ngOnInit() {}

  leerMediciones() {
    const path = 'test/'
    this.firedata.list<Mediciones>(path, ref => ref.orderByChild('time')).valueChanges().subscribe( valores => {
      console.log('test -> ', valores); 
      this.mediciones = valores;
      this.mediciones.reverse();
    })
  }
 
  segmentChanged(evento: any) {
    this.seccion = evento.detail.value;
    console.log('evento.detail.value ->', evento.detail.value);
  }

}

interface Mediciones{
  nivel: any;
  tds: any;
  temp: any;
  //ph: number;
}
