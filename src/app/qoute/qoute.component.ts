import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote' ;


@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {


  quotes:Quote [] = [
   
    new Quote( '"The best way to predict the future is to create it" ', 'Chandler Bing','Chandler Bing' ,'Technology' ,new Date(2021,7,16),0),
    new Quote( '"It is only when they go wrong that machines remind you how powerful they are." ', 'Becka Nzau', 'Jeff Bezoz','Technology' ,new Date(2021,7,16),0),
    new Quote( '"The Web as I envisaged it, we have not seen it yet. "', 'Claire Decker','Jeff Bezoz' ,'Technology' ,new Date(2021,7,16),0),
    new Quote( '"Once a new technology rolls over you, if youre not part of the steamroller, youre part of the road"', 'Joey Tribiyanni','Jeff Bezoz' ,'Technology' ,new Date(2021,7,16),0)
  ]
  

  constructor() { }

  toggleQuote(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: Quote) {
    quote.PostDate = new Date(quote.PostDate);
    this.quotes.push(quote);
  }

  completeQuote(isComplete: any, index: any) {
    if(isComplete) {
      const toComplete = confirm('Are you sure you want to delete this Quote');
      if(toComplete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  increaseLikes(toIncreaseLikes: boolean, index: number){
    if (toIncreaseLikes){
      this.quotes[index].upvote++;
    }
  }
  ngOnInit(): void {
  }

}
