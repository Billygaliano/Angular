import { Region } from '../model/regions';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://restcountries.eu/rest/v1/region/';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  public keyRegion: string;
  public results: Array<string>;
  public regions: Array<Region>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.keyRegion = '';
    this.results = [];
    this.regions =  [
      {name: 'africa'},
      {name: 'americas'},
      {name: 'asia' },
      {name: 'europe'}
    ];
  }

  getDataCountry() {
    this.results = [];

    this.http.get(URL + this.keyRegion).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.length; i++) {
          const countries = data[i].name + ' (' + data[i].nativeName + ')';
          this.results.push(countries);
        }
      },
      error => console.log(error)
    );
  }

}
