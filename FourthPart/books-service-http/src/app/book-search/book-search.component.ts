import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public keySearch: string;
  public results: Array<string>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.keySearch = '';
    this.results = [];
  }

  btnSearch() {
    this.results = [];

    this.http.get(URL + this.keySearch).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          this.results.push(bookTitle);
        }

        console.log(response.json());
      },
      error => console.error(error)
    );
  }

}
