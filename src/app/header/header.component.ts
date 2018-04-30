import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscriptio2n: Subscription;
  heading: string;
  description: string;

  constructor(private router: Router, private appConfigService: AppConfigService) {}

  ngOnInit() {
    this.subscription = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.heading = '';
          this.description2 = '';
          if (event.url.indexOf('videos') >= 0) {
            const id = event.url.substring(8, event.url.length);
            const videoCollection = this.appConfigService.getVideoCollection(id);
            this.heading = 'Our ' + videoCollection.name;
            this.description2 = videoCollection.description2;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
