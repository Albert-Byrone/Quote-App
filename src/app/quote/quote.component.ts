import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  title = 'Quotes';

  quotes: Quote[] = [
    new Quote(1, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live ',
    'Rick Cook, The Wizardry Compiled', 'Linus Torvalds',
    new Date(2019, 8, 1), 0, 0),
    new Quote(2, ' Any fool can write code that a computer can understand. Good programmers write code that humans can understand', 'Martin Fowler', 'Larry Niven',
    new Date(2019, 8, 1), 0, 0),
    new Quote(3, 'I\'m not a great programmer; I\'m just a good programmer with great habits..', 'Why The Lucky Stiff', 'Kent Beck',
    new Date(2019 , 8 , 1), 0, 0),
  ];


  quoteDelete(isRead, index) {
    if (isRead) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete){
        this.quotes.splice(index, 1);
      }

    }
  }
  addNewQuote(quote) {
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate);
  this.quotes.push(quote);
  }

  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

}
