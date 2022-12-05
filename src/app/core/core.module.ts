import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

const materialUiModules = [
  MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule
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
