import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public author: string;
    public company: string;
    public date: string;


  constructor() { }

  ngOnInit() {
    this.author  = 'Guillermo Galiano';
    this.company = 'Indra Software Labs';
    this.date = '2017';
  }

}
