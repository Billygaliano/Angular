import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './app-pie.component.html',
  styleUrls: ['./app-pie.component.css']
})
export class AppPieComponent implements OnInit {
  public sAutor: string;
  public sEmpresa: string;
  public sLugar: string;
  public sFecha: string;

  constructor() { }

  ngOnInit() {
    this.sAutor = 'Guillermo Galiano';
    this.sEmpresa = 'Indra SL';
    this.sLugar = 'Málagga';
    this.sFecha = '2017';
  }

}
