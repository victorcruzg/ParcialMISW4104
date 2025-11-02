/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CommonModule,
        TableModule,
        DividerModule,
        ImageModule
      ],
      declarations: [VehicleListComponent],
      providers: [VehicleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    
    component.vehicles = [
      new Vehicle(
        faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.number.int({ min: 2000, max: 2024 }),
        faker.number.int({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.url()
      ),
      new Vehicle(
        faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.number.int({ min: 2000, max: 2024 }),
        faker.number.int({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.url()
      ),
      new Vehicle(
        faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.number.int({ min: 2000, max: 2024 }),
        faker.number.int({ min: 0, max: 200000 }),
        faker.vehicle.color(),
        faker.image.url()
      )
    ];
    
    component.calculateVehiclesByBrand();
    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component has a table', () => {
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(0);
  });

  it('should have 3 rows in the table', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should have 4 header columns', () => {
    const headers = debug.queryAll(By.css('thead th'));
    expect(headers.length).toBe(4);
  });

  it('should display vehicle marca in the first row', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    const firstRowCells = rows[0].queryAll(By.css('td'));
    expect(firstRowCells[1].nativeElement.textContent).toEqual(component.vehicles[0].marca);
  });

  it('should display vehicle linea in the first row', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    const firstRowCells = rows[0].queryAll(By.css('td'));
    expect(firstRowCells[2].nativeElement.textContent).toEqual(component.vehicles[0].linea);
  });

  it('should display vehicle modelo in the first row', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    const firstRowCells = rows[0].queryAll(By.css('td'));
    expect(firstRowCells[3].nativeElement.textContent).toEqual(component.vehicles[0].modelo.toString());
  });
});
