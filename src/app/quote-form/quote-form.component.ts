import { Component, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']

})
export class FormComponent {
  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);
  @Output() addNew = new EventEmitter<Quote>();

  addQuote() {
this.addNew.emit(this.newQuote);
  }
}
