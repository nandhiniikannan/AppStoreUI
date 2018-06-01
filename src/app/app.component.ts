import { Component, OnInit } from '@angular/core';
import { ViewChild, HostListener, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appStores';
  routeLinks: any[];
  activeLinkIndex = -1;
constructor(private router: Router) {
      this.routeLinks = [
          {
              label: 'DashBoard',
              link: './dashChild',
              index: 0
          }, {
              label: 'All',
              link: './dashChild',
              index: 1
          }
      ];
  }
ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.routeLinks.indexOf(
            this.routeLinks.find(tab => tab.link === '.' + this.router.url));
      });
  }

}
