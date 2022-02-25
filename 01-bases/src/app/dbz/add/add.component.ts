import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

   newHero: Character = {
    name: '',
    power: 0
  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  constructor(private dbzService: DbzService){

  }
  
  add(): void {    
    if (this.newHero.name.trim().length === 0) {
      return;
    }
    // this.onNewCharacter.emit(this.newHero);
    this.dbzService.addCharacter(this.newHero);
    // Reset character
    this.newHero = {
      name: '',
      power: 0
    };
  }
}
