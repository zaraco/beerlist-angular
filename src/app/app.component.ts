import { Component, OnInit } from '@angular/core';
import { BeerService } from './service/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.beerList().subscribe((value) => {
      console.log(value);
    });
  }
}
