import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
// import {DomSanitizerImpl} from '@angular/platform-browser/src/security/dom_sanitization_service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  id: string;
  videoPage;

  constructor(private appConfigService: AppConfigService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.videoPage = this.appConfigService.getVideoPage(this.id);
      }
    );
  }

  openVideo(content) {
    this.modalService.open(content, { centered: true });
  }

}
