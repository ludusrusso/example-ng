import { Component, EventEmitter, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';

@Component({
  selector: 'lor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
