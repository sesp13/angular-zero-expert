import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'SaNtIaGo';
  value: number = 1000;
  obj = {
    name: 'Santiago',
  };

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
