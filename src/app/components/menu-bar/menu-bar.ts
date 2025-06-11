import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menu-bar.html',
  styleUrls: ['./menu-bar.css'],  // plural e array
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuBar {}
