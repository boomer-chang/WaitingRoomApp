import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppConfigService} from './app-config.service';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import {RouterModule, Routes} from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { SafePipe } from './safe.pipe';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'videos/:id', component: VideosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    SplashComponent,
    SafePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
