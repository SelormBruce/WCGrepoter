import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatStepperModule, MatMenuModule, MatDialogModule,
  MatSelectModule, MatExpansionModule, MatIconModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatTabsModule, } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule , MatStepperModule, MatMenuModule, MatDialogModule,
  MatSelectModule, MatExpansionModule, MatIconModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatTabsModule, ],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule , MatStepperModule, MatMenuModule, MatDialogModule,
  MatSelectModule, MatExpansionModule, MatIconModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatTabsModule, ],
})
export class MaterialModule { }
