import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lifeCycle';
  show: boolean = true;

  hide() {
    this.show = !this.show;
  }
}
