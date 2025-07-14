import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-mat-basic-icons-nueve',
  templateUrl: './mat-basic-icons-nueve.html',
  styleUrl: './mat-basic-icons-nueve.css',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicIconsNueve {

}
