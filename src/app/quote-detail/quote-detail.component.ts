import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input () quote :any;
  @Output () isComplete = new EventEmitter<boolean>();
  @Output() toIncreaseLikes = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  increaseLikes(increase: boolean){
    this.toIncreaseLikes.emit(increase);
  
  }

  dislike: number = 0;
    decreaseLikes(){
      return this.dislike++;
  }
    



}
