import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ToolBarComponent } from './layout/components/tool-bar/tool-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

const materialUiModules = [
  MatCardModule, 
  MatIconModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatTableModule, 
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [
    ToolBarComponent,
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialUiModules
  ],
  exports: [
    materialUiModules,
    LayoutComponent
  ]
})
export class CoreModule { }
