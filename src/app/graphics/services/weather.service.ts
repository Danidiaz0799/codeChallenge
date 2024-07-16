import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'https://api.weather.gov/gridpoints';

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    const locations: {[key: string]: string} = {
      columbia: 'LWX/31,80/forecast',
      kansas: 'TOP/31,80/forecast'
    };
    return this.http.get<any>(`${this.baseUrl}/${locations[location]}`);
  }

}
