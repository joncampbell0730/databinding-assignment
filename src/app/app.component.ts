import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onStart(currentNumber: number) {
    if (currentNumber % 2 === 0) {
      this.evenNumbers.push(currentNumber);
    } else {
      this.oddNumbers.push(currentNumber);
    }
  }
}
