import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KansasWeatherComponent } from './pages/kansas-weather/kansas-weather.component';
import { ColumbiaWeatherComponent } from './pages/columbia-weather/columbia-weather.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutPageComponent,
      children: [
          { path: 'kansas', component: KansasWeatherComponent },
          { path: 'columbia', component: ColumbiaWeatherComponent },
          { path: '**', redirectTo: ''}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
