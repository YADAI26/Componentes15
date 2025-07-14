
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

##  Mostrar un componente

- ***Autocompletado simple***

Comience por crear el panel de autocompletar y las opciones que se muestran dentro de él. Cada opción debe ser definido por una etiqueta. 
Establezca la propiedad value de cada opción en el valor que desee de la entrada de texto cuando se selecciona esa opción.mat-option


```
HTML
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

```
TS
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
## A continuacion mostramos el componente 

<img width="615" height="340" alt="image" src="https://github.com/user-attachments/assets/111f364c-c76c-4a5e-8ae8-fcd24dd55f79" />


