import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Array<Vehicle> = [];
  mapCountVehicle = new Map<string, number>();

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.calculateVehiclesByBrand();
    });
  }

  calculateVehiclesByBrand(): void {
    this.vehicles.forEach((vehicle) => {
      this.mapCountVehicle.set(vehicle.marca,this.getCountVhiculesByBrand(vehicle.marca) )
    });
  }

  getCountVhiculesByBrand(marca: string): number {
    return this.vehicles.filter((vehicle) => vehicle.marca === marca).length;
  }
}
