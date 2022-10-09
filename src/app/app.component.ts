import { Component, OnInit } from '@angular/core';
import { QuotesServices } from './quote/quote.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  quotes: any;

  constructor(public quote: QuotesServices) {}

  ngOnInit() {
    this.quote.getQuotes().subscribe
    (
      (r) =>{this.quotes = r.quotes; console.log(r)},

      //(e) =>{console.error(e)}
    )
  }
}
