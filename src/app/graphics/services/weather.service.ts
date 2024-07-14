import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'https://api.weather.gov/gridpoints';

  constructor(private http: HttpClient) { }

  getWeatherColumbia(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/LWX/31,80/forecast`);
  }

  getWeatherKansas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/TOP/31,80/forecast`);
  }

}
