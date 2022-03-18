import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  save(form: NgForm) {
    console.log(form);
  }
}
