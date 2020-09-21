import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  sequence = 0;

  private _entities: { id: number; type: string, attributes: any; layer?: string; }[] = [];

  get entities() {
    return this._entities;
  }

  private set(value: any) {
    this._entities = value;
  }

  constructor() { }

  addCircle(x: number, y: number, radius: number) {
    this.entities.push({
      id: this.sequence++,
      type: 'circle',
      attributes: { x, y, radius }
    });
  }

  addRect(x: number, y: number, width: number, height: number) {
    this.entities.push({
      id: this.sequence++,
      type: 'rect',
      attributes: { x, y, width, height }
    });
    console.log(this.entities);
  }

}
