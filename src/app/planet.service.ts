// src/app/planet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Planet {
  id: number;
  name: string;
  climate: string;
  terrain: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'http://localhost:5156/v1/planets';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl);
  }
}