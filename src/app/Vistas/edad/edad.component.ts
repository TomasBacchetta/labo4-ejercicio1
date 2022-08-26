import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent implements OnInit {

  edad1:string = "";
  edad2:string = "";
  promedio:string = "";
  suma:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  
  calcular():void{
    var sum = Number(this.edad1) + Number(this.edad2);
    this.suma = String(sum);
    this.promedio = String(sum / 2);
  }

  limpiar():void{
    this.edad1 = "";
    this.edad2 = "";
    this.promedio = "";
    this.suma = "";
  }

}
