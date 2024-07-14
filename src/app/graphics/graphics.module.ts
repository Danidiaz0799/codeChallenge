import { NgModule } from '@angular/core';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgChartjsModule } from 'ng-chartjs';
import { ColumbiaWeatherComponent } from './pages/columbia-weather/columbia-weather.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ColumbiaWeatherComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    MaterialModule,
    NgChartjsModule
  ]
})
export class GraphicsModule { }
