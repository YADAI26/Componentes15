import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-mat-basic-divider-seis',
  templateUrl: './mat-basic-divider-seis.html',
  styleUrls: ['./mat-basic-divider-seis.css'],
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicDividerSeisComponent  {}

