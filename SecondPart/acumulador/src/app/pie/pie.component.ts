import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public sAutor: string;
  public sEmpresa: string;
  public sLugar: string;
  public sFecha: string;

  constructor() { }

  ngOnInit  () {
    this.sAutor = 'Guillermo Galiano';
    this.sEmpresa = 'Indra SL';
    this.sLugar = 'Málaga';
    this.sFecha = '2017';
  }
}


