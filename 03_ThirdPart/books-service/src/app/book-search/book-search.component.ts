import { BooksService } from '../services/books.service';
import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public keySearch: string;
  public results: Array<string>;

  constructor(private svSearch: BooksService) { }
  // constructor(private http: Http) { }

  ngOnInit() {
    this.keySearch = '';
    this.results = [];
  }

  btnSearch() {
    this.results = this.svSearch.getBooks(this.keySearch);
  }

}
