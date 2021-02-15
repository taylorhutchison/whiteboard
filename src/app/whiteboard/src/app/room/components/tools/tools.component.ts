import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { DrawService } from '../../services/draw.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  @Output()
  modeChange: EventEmitter<string> = new EventEmitter<string>();

  mode: string;

  constructor(private drawService: DrawService) { }

  ngOnInit(): void {
    this.selectMode('circle');
  }

  selectMode(mode: string) {
    this.mode = mode;
    this.modeChange.emit(this.mode);
    this.drawService.toolMode = this.mode;
  }

}
