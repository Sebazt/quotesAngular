import { Component, OnInit } from '@angular/core';
import { QuotesServices } from './quote/quote.service';
import { Quotes } from './quote/quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  quotes: Quotes[] = []; //interface
  currentQuote: Quotes | undefined;
  //currentAuthor: Quotes | undefined;
  i: number = 0;
  b: number = 0;
  ChangeColor = [
    '#a871be',
    '#2471b4',
    '#AC4818',
    '#0F471C',
    '#852D6D',
    '#30EA25',
    '#A2866C',
    '#38240A',
    '#EB5965',
    '#991B52',
    '#490ECE',
    '#2A98D3',
    '#23BA5C',
    '#21230D',
    '#AB7A7C',
    '#003a34',
    '#007459',
    '#40A69A',
    '#5a5a57',
  ];
  currentColour:string = "";

  constructor(private quote: QuotesServices) {}

  ngOnInit() {
    this.quote.getQuotes().subscribe(
      (r) => {
        this.quotes = r.quotes;
        this.changeColour();
        //this.currentAuthor = this.quotes[this.i];
        console.log(r);
      }
      //(e) =>{console.error(e)}
    );
  }

  changeColour() {
    this.i = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[this.i];

    this.b = Math.floor(Math.random() * this.ChangeColor.length);
    this.currentColour = this.ChangeColor[this.b]
    console.log(this.currentColour);
  }


}
