import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {AppConfigService} from './app-config.service';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import {RouterModule, Routes} from '@angular/router';
import { SafePipe } from './safe.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UICarouselModule} from 'ui-carousel';

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
    SafePipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    UICarouselModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
