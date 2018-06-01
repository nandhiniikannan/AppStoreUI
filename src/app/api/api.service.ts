import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import 'rxjs/Rx';
import { AppStore } from "../appstores";
 
 @Injectable()
 export class ApiService {
 
     private _postsURL = "http://localhost:8085/all/apps";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<AppStore[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <AppStore[]>response.json();
             })
             .catch(this.handleError);
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }