import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  _color: string = 'red';
  _message: string = 'This field is required';

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  // @Input() message: string = 'Hello world from a directive';
  @Input() set message(value: string) {
    this._message = value;
    this.setText();
  }

  @Input() set valid(value: boolean){
    if(!value){
      this.htmlElement.nativeElement.classList.add('d-none');
    } else {
      this.htmlElement.nativeElement.classList.remove('d-none');
    }
  }

  constructor(private el: ElementRef<any>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('Ng on init on a directive');
    // console.log(this.color); // undefined
    // console.log(this.message); // undefined
    this.setColor();
    this.setText();
    this.setClass();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const message = changes['message']?.currentValue;
    // if (message) this.htmlElement.nativeElement.innerText = message;
    // const color = changes['color']?.currentValue;
    // if (color) this.htmlElement.nativeElement.style.color = color;
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setText(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
