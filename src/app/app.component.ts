import { Component } from '@angular/core';
import { MOCK_VEHICLES } from './mocks/vechicles.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars = MOCK_VEHICLES;
  constructor() {}
}
