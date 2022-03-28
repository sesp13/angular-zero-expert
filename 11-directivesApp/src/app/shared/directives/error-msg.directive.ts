import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() message: string = 'Hello world from a directive';

  constructor(private el: ElementRef<any>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('Ng on init on a directive');
    this.setColor();
    this.setText();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setText(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
