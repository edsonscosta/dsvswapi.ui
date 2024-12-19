// src/app/planet-list/planet-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
  selector: 'app-root',
  imports: [CommonModule], 
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: any[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe((data) => {
      this.planets = data;
    });
  }
}