import { Component, Input } from '@angular/core';
import { Beer } from '../../types/beer.type';
import { MatDialog } from '@angular/material/dialog';
import { BeerDialogComponent } from '../beer-dialog/beer-dialog.component';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent {
  @Input() beer: Beer | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BeerDialogComponent, {
      data: this.beer,
    });
  }
}
