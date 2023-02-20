import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[] = [
    {id: 1, name: 'Dark Souls Ramaster', avaliation: 10, difficulty: 'hard'},
    {id: 2, name: 'Elden Ring', avaliation: 10, difficulty: 'medium'},
    {id: 3, name: 'Bioshock Infinite', avaliation: 8, difficulty: 'medium'},
    {id: 4, name: 'Far Cry 3', avaliation: 8, difficulty: 'medium'}
  ]
  displayedColumns = ['name', 'avaliation', 'difficulty'];

  constructor() { }

  ngOnInit(): void {
  }

}
