import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home.component';


const routes: Routes = [
  { path: 'room/:roomid', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: ':roomid', redirectTo: 'room/:roomid' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
