import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Chart, registerables } from 'chart.js';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

Chart.register(...registerables);

@Component({
  selector: 'app-columbia-weather',
  templateUrl: './columbia-weather.component.html',
  styleUrls: ['./columbia-weather.component.scss']
})
export class ColumbiaWeatherComponent implements OnInit {
  weatherData: any[] = [];
  currentIndex: number = 0;
  daysToShow: number = 2.5;
  chart: any;
  displayedColumns: string[] = ['day', 'temperature'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getColumbiaWeather();
  }

  getColumbiaWeather(): void {
    this.weatherService.getWeather('columbia').subscribe(weatherData => {
      this.weatherData = weatherData.properties.periods;
      this.dataSource = new MatTableDataSource(this.weatherData.slice(this.currentIndex, this.currentIndex + this.daysToShow * 2));
      this.dataSource.paginator = this.paginator;
      this.updateChart();
    });
  }

  updateChart(): void {
    const labels = this.weatherData.slice(this.currentIndex, this.currentIndex + this.daysToShow * 2).map((period: any) => period.name);
    const temperatures = this.weatherData.slice(this.currentIndex, this.currentIndex + this.daysToShow * 2).map((period: any) => period.temperature);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('weatherChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (°F)',
          data: temperatures,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
          hoverBorderColor: 'rgba(75, 192, 192, 1)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}°F`;
              }
            },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
              size: 16
            },
            bodyFont: {
              size: 14
            },
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 50,
            max: 110,
            ticks: {
              color: '#4B5563',
              font: {
                size: 14,
                family: 'Inter, sans-serif'
              },
              maxTicksLimit: 6
            }
          },
          x: {
            ticks: {
              color: '#4B5563',
              font: {
                size: 14,
                family: 'Inter, sans-serif'
              },
              maxRotation: 0, // Establece la rotación máxima a 0 grados
              minRotation: 30, // Establece la rotación mínima a 0 grados
              autoSkip: true
            }
          }
        }
      }
    });
  }

  nextDays(): void {
    if (this.currentIndex + this.daysToShow * 2 < this.weatherData.length) {
      this.currentIndex += this.daysToShow * 2;
      this.updateChart();
      this.updateTable();
    }
  }

  previousDays(): void {
    if (this.currentIndex - this.daysToShow * 2 >= 0) {
      this.currentIndex -= this.daysToShow * 2;
      this.updateChart();
      this.updateTable();
    }
  }

  onDaysToShowChange(event: any): void {
    this.daysToShow = event.target.value;
    this.updateChart();
    this.updateTable();
  }

  updateTable(): void {
    this.dataSource.data = this.weatherData.slice(this.currentIndex, this.currentIndex + this.daysToShow * 2);
  }
}
