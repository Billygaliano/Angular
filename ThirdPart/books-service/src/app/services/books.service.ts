import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  bookList: Array<string>;

  constructor() { }

  getBooks(book) {
    this.bookList = [
      'El camino',
      'Clean Code',
      'El valle de los leones'
    ];
    return (this.bookList);
  }

}
