import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  deboucer: Subject<string> = new Subject();
  term: string = '';

  constructor() {}

  ngOnInit(): void {
    this.deboucer.pipe(debounceTime(300)).subscribe((value: string) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  keyPressed() {
    this.deboucer.next(this.term);
  }
}
