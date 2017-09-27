import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input()
  public usuario: string;

  @Output()
  public eventoBorrar: EventEmitter<boolean>;

  constructor() {
    this.eventoBorrar = new EventEmitter();
   }

  ngOnInit() {
  }

  btnBorrar(oEv) {
    this.eventoBorrar.emit(true);
  }

}
