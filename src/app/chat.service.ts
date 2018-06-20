import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChatService {

  private appid = '76247eeaa25835db3c854fb894704ddf';
  constructor(private http: Http) { }

  getWeather(city: string) {
    const endpoint = 'http://localhost:60268/api/media/WeatherForecasts/?city=Kyiv';
    return this.http.get(endpoint)//, {search: searchParams})
  }
}
