import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
})
export class Page1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name:string = 'Santiago';

  constructor() {
    console.log('constructor');
  }
  ngDoCheck(): void {
    console.log('Do check');
  }
  ngAfterContentInit(): void {
    console.log('After content init');
  }
  ngAfterContentChecked(): void {
    console.log('After content checked');
  }
  ngAfterViewInit(): void {
    console.log('After view init');
  }
  ngAfterViewChecked(): void {
    console.log('After view checked');
  }
  ngOnDestroy(): void {
    console.log('On destroy');
  }

  ngOnInit(): void {
    console.log('ng on init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes');
  }

  save() {}
}
