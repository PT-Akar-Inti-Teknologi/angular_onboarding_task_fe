import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialUiModules = [
  MatCardModule, 
  MatIconModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatTableModule, 
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialUiModules
  ],
  exports: [
    materialUiModules
  ]
})
export class CoreModule { }
