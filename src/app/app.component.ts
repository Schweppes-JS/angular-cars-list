import { Component } from '@angular/core';
import { Car } from './models/Car';
import { CarService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cars: Car[] = [];
  public areCarsLoaded: boolean = false;

  constructor(private carService: CarService) {
    this.getCars();
  }

  private getCars(): void {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
      this.areCarsLoaded = true;
    });
  }
}
