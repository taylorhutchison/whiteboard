import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/shared/services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;

  roomid: string;
  constructor(private router: Router, private functionsService: FunctionsService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
    this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;
    console.log(this.canvas.nativeElement);
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(1000, 1000);
    ctx.stroke();
  }

  create() {
    this.functionsService.createRoom().subscribe(id => {
      console.log(id);
      this.router.navigateByUrl(`/room/${id}`);
    });
  }

  join() {
    this.router.navigateByUrl(`/room/${this.roomid}`);
    // (async () => {
    //   const response = await fetch('https://whiteboardfn.azurewebsites.net/api/negotiate');
    //   const body = await response.json();
    //   const connection = new signalR.HubConnectionBuilder()
    //     .withUrl(body.url, { accessTokenFactory: () => body.accessToken })
    //     .configureLogging(signalR.LogLevel.Information)
    //     .build();

    //   connection.on('newMessage', data => {
    //     console.log(data);
    //   });

    //   connection.onclose(async () => {
    //     await start();
    //   });

    //   async function start() {
    //     try {
    //       await connection.start();
    //       console.log('connected');
    //       await fetch('https://whiteboardfn.azurewebsites.net/api/SendMessage?', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ message: 'hihi' })
    //       });
    //     } catch (err) {
    //       console.log(err);
    //       setTimeout(() => start(), 5000);
    //     }
    //   }
    //   start();
    // })();
  }

}
