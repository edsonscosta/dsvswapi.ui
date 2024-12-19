import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PlanetListComponent } from './app/planet-list/planet-list.component';
import { PlanetService } from './app/planet.service';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(PlanetListComponent, appConfig).catch((err) =>
  console.error(err)
);
