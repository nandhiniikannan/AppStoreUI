import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styles: ['img{float:left;} h1{overflow: auto;} ']
})
export class AppHeaderComponent {

  @Input() title:string;
}
