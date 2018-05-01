import { Component, OnInit } from '@angular/core';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private appConfigService: AppConfigService) { }

  ngOnInit() {
  }

}
