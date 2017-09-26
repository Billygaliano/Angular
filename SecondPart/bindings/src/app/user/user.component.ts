import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: {name: string,
                surname: string};
  public hobbies: Array<string>;

  constructor() { }

  ngOnInit() {
    this.user = {name: 'Pepe', surname: 'Pérez'};
    this.hobbies = ['Leer', 'Viajar', 'Comer'];
  }

  btnBorrar(oEv) {
    this.user.name = '';
    this.user.surname = '';
  }

}
