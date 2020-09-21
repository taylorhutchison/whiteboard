import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './components/room/room.component';
import { BoardComponent } from './components/board/board.component';
import { ToolsComponent } from './components/tools/tools.component';


@NgModule({
  declarations: [RoomComponent, BoardComponent, ToolsComponent],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
