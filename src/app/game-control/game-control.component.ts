import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gameStarted') gameStarted = new EventEmitter<{gameNumber: number}>();
  gameNumber = 0;

  constructor() { }l

  ngOnInit(): void {
  }


}
