import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Basic chips
 */
@Component({
  selector: 'app-mat-basic-chips-cuatro',
  standalone: true,
  templateUrl: './mat-basic-chips-cuatro.html',
  styleUrls: ['./mat-basic-chips-cuatro.css'],
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicsChipsCuatroComponent {}

