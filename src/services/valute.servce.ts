import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ValuteServce {

  data=[];

  constructor(private http: Http) {


  }

  listValutes(){

   return this.http.get('../assets/currencies.json')
      .map(res =>  res.json());
  }
}
