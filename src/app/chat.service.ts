import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CONFIGURATION } from './shared/app.constants';

@Injectable()
export class ChatService {

  constructor(private http: Http) { }

  getWeather(city: string) {
    const endpoint = `${CONFIGURATION.baseUrls.server}/api/media/WeatherForecasts/?city=${city}`;
    return this.http.get(endpoint)//, {search: searchParams})
  }
}
