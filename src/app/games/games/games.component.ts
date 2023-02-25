import { GamesService } from './../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Observable<Game[]>;
  displayedColumns = ['name', 'avaliation', 'difficulty'];

  constructor(private gamesService: GamesService ) {
    this.games = this.gamesService.list();
   }

  ngOnInit(): void {
  }

}
