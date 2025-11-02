import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule, 
    DividerModule,
    ImageModule,
    TableModule
  ],
  declarations: [VehicleListComponent],
  exports: [VehicleListComponent,DividerModule,ImageModule,TableModule],
})
export class VehicleModule { }
