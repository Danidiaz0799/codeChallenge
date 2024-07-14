import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-kansas-weather',
  templateUrl: './kansas-weather.component.html',
  styleUrls: ['./kansas-weather.component.scss']
})
export class KansasWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getKansasWeather();
  }

  getKansasWeather(): void {
    this.weatherService.getWeatherKansas().subscribe(weatherData => {
      console.log(weatherData);
      const labels = weatherData.properties.periods.map((period: any) => period.name);
      const temperatures = weatherData.properties.periods.map((period: any) => period.temperature);

      new Chart('weatherChart', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Temperature (°F)',
            data: temperatures,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }

}
