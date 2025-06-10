import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { MenuBar } from "./components/menu-bar/menu-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, MenuBar, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],  // plural e array
})
export class App {
  protected title = 'store';
}
