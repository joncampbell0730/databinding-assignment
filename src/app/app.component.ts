import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumber = 0;
  gameElements = [{type: 'even', number: 0}]

  onStart() {
    this.gameNumber = ++this.gameNumber;
    console.log(this.gameNumber);
  }
}
