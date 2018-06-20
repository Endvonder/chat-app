import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { SupportComponent } from './support/support.component';

const appRoutes: Routes = [

  {
    path: 'weather',
    component: WeatherComponent,

  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }


];
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NewsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
