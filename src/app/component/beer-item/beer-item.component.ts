import { Component, Input } from '@angular/core';
import { Beer } from '../../types/beer.type';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent {
  @Input() beer: Beer | undefined;

  constructor() {}
}
