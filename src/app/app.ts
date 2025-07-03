import { Component } from '@angular/core';
import { Header } from './myComponent/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'TO-DO';
  selectedColor: string = 'white';

changeBackground(color: string) {
  this.selectedColor = color;
}

}
