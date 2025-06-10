import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],  // plural e array
})
export class Home {}
