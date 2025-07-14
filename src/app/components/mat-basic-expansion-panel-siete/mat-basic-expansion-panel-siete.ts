import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-mat-basic-expansion-panel-siete',
  templateUrl: './mat-basic-expansion-panel-siete.html',
  styleUrl: './mat-basic-expansion-panel-siete.css',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatBasicExpansionPanelSiete {
  readonly panelOpenState = signal(false);

}
