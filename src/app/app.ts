import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { MenuBar } from "./components/menu-bar/menu-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBar, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],  // plural e array
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected title = 'store';
}
