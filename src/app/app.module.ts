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
import { FbChatComponent } from './fb-chat/fb-chat.component';
import { SignalRService } from './signalR.service';

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
  },
  {
    path: 'fb-chat',
    component: FbChatComponent
  }


];
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NewsComponent,
    SupportComponent,
    FbChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ChatService, SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
