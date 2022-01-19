import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beer } from '../../types/beer.type';

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.scss'],
})
export class BeerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Beer) {}
}
