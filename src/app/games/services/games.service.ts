import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game } from '../model/game';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = '/assets/games.json'

  list() {
    return this.httpClient.get<Game[]>(this.API)
    .pipe(
      first(),
      tap(games => console.log(games))
    );
  }
}
