import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppModuleModule } from '../shared/app-module/app-module.module';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    AppModuleModule
  ]
})
export class GamesModule { }
