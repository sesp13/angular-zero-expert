import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {

  }

  ngOnInit(): void {
  }

  search(term: string) {
    this.gifService.searchGifs(term);
    this.txtSearch.nativeElement.value = '';
  }

}
