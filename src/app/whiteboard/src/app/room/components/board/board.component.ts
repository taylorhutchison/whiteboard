import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { WindowService } from 'src/app/shared/services/window.service';
import { DrawService } from '../../services/draw.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  constructor(
    private windowService: WindowService,
    private stateService: StateService,
    private drawService: DrawService) { }

  ngOnInit(): void {
    this.stateService.addCircle(40, 40, 40);
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.canvas.nativeElement.addEventListener('click', (e) => {
      switch (this.drawService.toolMode) {
        case 'circle':
          this.stateService.addCircle(e.offsetX, e.offsetY, 40);
          break;
        case 'rect':
          this.stateService.addRect(e.offsetX - 40, e.offsetY - 40, 80, 80);
          break;
      }
      this.draw();
    });

    this.windowService.size.subscribe(_ => {
      const boundingRect = this.canvas.nativeElement.getBoundingClientRect();
      this.canvas.nativeElement.width = boundingRect.width;
      this.canvas.nativeElement.height = boundingRect.height;
      this.draw();
    });



  }

  draw() {
    this.drawService.draw(this.ctx, this.stateService.entities);
  }

}
