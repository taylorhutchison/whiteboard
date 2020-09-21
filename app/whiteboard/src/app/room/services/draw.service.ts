import { Injectable } from '@angular/core';
import { Circle } from '../interfaces/circle';
import { Rect } from '../interfaces/rect';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  toolMode: string;

  constructor() { }

  drawCircle(ctx: CanvasRenderingContext2D, circle: Circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawRect(ctx: CanvasRenderingContext2D, rect: Rect) {
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.stroke();
  }

  clear(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
  }

  draw(ctx: CanvasRenderingContext2D, entities: any[]) {
    window.requestAnimationFrame(() => {
      this.clear(ctx);
      entities.forEach(entity => {
        if (entity.type === 'circle') {
          this.drawCircle(ctx, entity.attributes as Circle);
        } else if (entity.type === 'rect') {
          this.drawRect(ctx, entity.attributes as Rect)
        }
      });
    });
  }
}
