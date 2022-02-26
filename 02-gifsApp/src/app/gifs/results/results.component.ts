import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {


  get results() {
    return this.gifService.results;
  }

  constructor(private gifService: GifsService) {

  }

  ngOnInit(): void {
  }

}
