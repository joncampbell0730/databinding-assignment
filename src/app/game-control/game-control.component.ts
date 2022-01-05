import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gameStarted') gameStarted = new EventEmitter<number>();
  interval;
  gameNumber = 0

  constructor() { }

  ngOnInit(): void {
  }
  
  onGameStop() {
    clearInterval(this.interval);
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.gameNumber + 1);
      this.gameNumber++;
    }, 1000);
  }
}
