
<div align="center">

**TECNOLOGICO NACIONAL DE MEXICO**  
**INSTITUTO TECNOLÓGICO DE OAXACA**

Departamento de Ingeniería en Sistemas Computacionales  

Programación Web  

**Ejercicios de Angular Material**

Profesor: Martínez Nieto Adelina

Alumna:
Salinas Montesinos Cintia Yadai  
Grupo: VSI  

Oaxaca, Oaxaca, a 04 de julio de 2025.

</div>

---
## Ejercicios de Angular Material

## Introducción a Angular Material:
Esta guía explica cómo configurar su proyecto de Angular para comenzar a usar Angular Material. 
Incluye: información sobre los requisitos previos, la instalación de Angular Material y, opcionalmente, 
la visualización de una muestra Material en su aplicación para verificar su configuración.
##  Instalar material angular

```
ng add @angular/material
```

---

##  Mostrar un componente

- ***Autocompletado simple***

Comience por crear el panel de autocompletar y las opciones que se muestran dentro de él. 
Cada opción debe ser definido por una etiqueta. Establezca la propiedad value de cada opción 
en el valor que desee de la entrada de texto cuando se selecciona esa opción.mat-option

HTML
```
<form class="example-form">
  <mat-form-field class="example-full-width">
    <mat-label>Number</mat-label>
    <input type="text"
           placeholder="Pick one"
           aria-label="Number"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      @for (option of options; track option) {
        <mat-option [value]="option">{{option}}</mat-option>
      }
    </mat-autocomplete>
  </mat-form-field>
</form>

```
TS
```

import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrl: 'autocomplete-simple-example.css',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class AutocompleteSimpleExample {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
```
## Consola del navegador mostrando resultados :

<img width="615" height="340" alt="image" src="https://github.com/user-attachments/assets/111f364c-c76c-4a5e-8ae8-fcd24dd55f79" />


- ***Badge overview***
DESC:

HTTML
```
  <div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>

  <div matBadge="1" matBadgeSize="small" class="demo-section">Text with small badge</div>
  <div matBadge="1" matBadgeSize="large" class="demo-section">Text with large badge</div>

<div class="demo-section">
  Button with a badge on the left
  <button matButton="elevated" matBadge="8" matBadgePosition="before">
    Action
  </button>
</div>

<div class="demo-section">
    Button toggles badge visibility
    <button matButton="elevated" matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">
        Hide
    </button>
  </div>

<div class="demo-section">
  Icon with a badge
  <mat-icon matBadge="15">home</mat-icon>
    <!-- Include text description of the icon's meaning for screen-readers -->
    <span class="cdk-visually-hidden">
      Example with a home icon with overlaid badge showing the number 15
    </span>
</div>
```

TS
```
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-overview-example',
  templateUrl: 'badge-overview-example.html',
  styleUrl: 'badge-overview-example.css',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

```

## Consola del navegador mostrando resultados :

<img width="614" height="644" alt="image" src="https://github.com/user-attachments/assets/b0ada94c-5ad4-48fb-9962-7b17ca570478" />


- ***Basic checkboxes***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :

<img width="588" height="405" alt="image" src="https://github.com/user-attachments/assets/985cd94f-0578-4da6-b9f3-79761df92ded" />


- ***Basic chips***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :

<img width="649" height="235" alt="image" src="https://github.com/user-attachments/assets/e1149d4d-1508-40f6-8f78-32732350609c" />


- ***Basic datepicker***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :
  
- ***Basic divider***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :

- ***Basic expansion panel**
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :



- ***Simple form field***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Basic icons***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Basic Inputs***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***List with selection***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Indeterminate progress-bar***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Basic radios***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Slider with custom thumb label formatting***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :


- ***Basic snack-bar***
DESC:

HTTML
```
```

TS
```
```

## Consola del navegador mostrando resultados :



















