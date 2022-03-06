import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [],
})
export class NoCommonComponent {
  // i18nSelect pipe
  name: string = 'Susan';
  gender: string = 'female';
  genderMap = {
    male: 'He',
    female: 'She',
  };

  changeName() {
    if (this.gender == 'female') {
      this.gender = 'male';
      this.name = 'Santiago';
    } else {
      this.gender = 'female';
      this.name = 'Susan';
    }
  }

  // 18nPlural pipe
  clients = ['Marie', 'Peter', 'Rock', 'John', 'Wiliam'];
  clientsMap = {
    '=0': "We don't have any clients waiting",
    '=1': `We have 1 client waiting`,
    other: `We have # clients waiting`,
  };

  removeClient() {
    this.clients.pop();
  }

  // Key value Pipe
  person = {
    name: 'Fernando',
    age: 35,
    direction: 'Ottawa, Canada',
  };

  // Json Pipe
  heroes = [
    {
      name: 'Mr Incredible',
      power: 'Strength',
    },
    {
      name: 'Superman',
      power: 'Flies',
    },
    {
      name: 'Aquaman',
      power: 'Power of the seas',
    },
  ];

  // Async Pipe
  myObservable = interval(2000); // 0 1 2 6 4 5 6

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from a promise!');
    }, 2000);
  });
}
