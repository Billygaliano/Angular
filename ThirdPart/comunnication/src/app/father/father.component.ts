import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit() {
  }

  borrar(oEv) {
    console.log(oEv);
    this.nombre = '';
  }

}
