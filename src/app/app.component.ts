import { Component, OnInit } from '@angular/core';
import { BeerService } from './service/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  beers$ = this.beerService.beerList();
  constructor(private beerService: BeerService) {}
}
