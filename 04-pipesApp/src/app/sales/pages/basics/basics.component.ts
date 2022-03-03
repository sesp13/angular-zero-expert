import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  nameLower: string = 'santiago';
  nameUpper: string = 'SANTIAGO';
  fullName: string = 'SaNtIaGo';

  today = new Date(); // today

  constructor() {}

  ngOnInit(): void {}
}
