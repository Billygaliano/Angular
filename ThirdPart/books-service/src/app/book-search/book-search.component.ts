import { BooksService } from '../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public keySearch: string;
  public results: Array<string>;

  constructor(private svSearch: BooksService) { }

  ngOnInit() {
    this.keySearch = '';
    this.results = [];
  }

  btnSearch() {
    this.results = this.svSearch.getBooks(this.keySearch);
  }

}
