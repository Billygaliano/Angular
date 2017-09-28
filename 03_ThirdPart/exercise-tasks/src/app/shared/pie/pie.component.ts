import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public anno: Date;
  constructor() { }

  ngOnInit() {
    this.autor = 'Guillermo Galiano';
    this.anno = new Date();
  }

}
