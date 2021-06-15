import { Component, OnInit } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public router: Router) { }

}

