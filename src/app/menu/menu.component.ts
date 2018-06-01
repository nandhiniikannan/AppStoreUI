import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { AppStore } from '../appstores';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [ApiService]
})
export class MenuComponent implements OnInit {

  _postsArray: AppStore[];
  
  constructor(private apiSerivce: ApiService) {
 }
  getPosts(): void {
    this.apiSerivce.getPosts()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}
ngOnInit() {
  this.getPosts();
}

}

