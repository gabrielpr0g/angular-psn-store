import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],  // plural e array
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {}
