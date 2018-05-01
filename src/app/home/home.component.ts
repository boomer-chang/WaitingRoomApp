import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    'https://www.slalom.com/sites/default/files/Dallas-Header-1200x600.jpg',
    'https://www.slalom.com/sites/default/files/qa-dallas-gm-john-hill-1200x600.jpg',
    'http://dmn.merlinone.net/THUMBS2016/TDIR85402/BX204_0035_9.JPG'
  ]

  constructor() {}

  ngOnInit() {
  }

}
