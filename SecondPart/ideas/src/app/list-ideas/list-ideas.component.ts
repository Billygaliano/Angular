import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.css']
})
export class ListIdeasComponent implements OnInit {

  ideas: Array<string>;
  newIdea: string;

  constructor() { }

  ngOnInit() {
    this.ideas = [];
  }

  addIdea() {
    this.ideas.push(this.newIdea);
    this.newIdea = '';
  }

}
