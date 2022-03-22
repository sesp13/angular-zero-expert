import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [],
})
export class Page2Component implements OnInit, OnDestroy {
  seconds?: number;
  timerSubscription?: Subscription;
  constructor() {}

  ngOnInit(): void {
    console.log('ng on init!');
    this.timerSubscription = interval(1000).subscribe((i) => {
      this.seconds = i;
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}
