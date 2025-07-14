import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocompleteUnoComponent } from './components/mat-autocomplete-uno/mat-autocomplete-uno';
import { MatBadgeOverviewDosComponent  } from './components/mat-badge-overview-dos/mat-badge-overview-dos';
import { MatBasicsCheckboxesTresComponent } from './components/mat-basic-checkboxes-tres/mat-basic-checkboxes-tres';
import { MatBasicsChipsCuatroComponent } from './components/mat-basic-chips-cuatro/mat-basic-chips-cuatro';
import { MatBasicDatepickerCincoComponent } from './components/mat-basic-datepicker-cinco/mat-basic-datepicker-cinco';
import { MatBasicDividerSeisComponent } from './components/mat-basic-divider-seis/mat-basic-divider-seis';
import { MatBasicExpansionPanelSiete } from './components/mat-basic-expansion-panel-siete/mat-basic-expansion-panel-siete';
import { MatSimpleFormFieldOcho } from './components/mat-simple-form-field-ocho/mat-simple-form-field-ocho';
import { MatBasicIconsNueve } from './components/mat-basic-icons-nueve/mat-basic-icons-nueve';
import { MatBasicInputsDiez } from './components/mat-basic-inputs-diez/mat-basic-inputs-diez';
import { MatBasicListOnce } from './components/mat-basic-list-once/mat-basic-list-once';
import { MatIndeterminateProgressBarDoce } from './components/mat-indeterminate-progress-bar-doce/mat-indeterminate-progress-bar-doce';
import { MatBasicRadiosTrece } from './components/mat-basic-radios-trece/mat-basic-radios-trece';
import { MatBasicSliderCatorce } from './components/mat-basic-slider-catorce/mat-basic-slider-catorce';
import { MatBasicSnackBarQuince } from './components/mat-basic-snack-bar-quince/mat-basic-snack-bar-quince';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocompleteUnoComponent,
            MatBadgeOverviewDosComponent,
            MatBasicsCheckboxesTresComponent,
            MatBasicsChipsCuatroComponent,
            MatBasicDatepickerCincoComponent,
            MatBasicDividerSeisComponent,
            MatBasicExpansionPanelSiete,
            MatSimpleFormFieldOcho,
            MatBasicIconsNueve,
            MatBasicInputsDiez,
            MatBasicListOnce,
            MatIndeterminateProgressBarDoce,
            MatBasicRadiosTrece,
            MatBasicSliderCatorce,
            MatBasicSnackBarQuince],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectmaterial';
}
