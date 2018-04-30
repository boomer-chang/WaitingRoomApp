import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
// import {DomSanitizerImpl} from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  id: string;
  videoCollection;

  constructor(private appConfigService: AppConfigService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.videoCollection = this.appConfigService.getVideoCollection(this.id);
      }
    );
    // alert(this.videoCollection.url);
  }

  // videoURL() {
  //   alert(this.videoCollection.url);
  //   return this.sanitizer.bypassSecurityTrustUrl(this.videoCollection['url']);
  // }

}
