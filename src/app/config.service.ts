import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import { catchError,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="http://localhost:8080/zoho/ProductServlet?function=display";
    return this.http.get(url);
  }
  addToCart(items:any){
    let url="http://localhost:8080/zoho/ProductServlet?function=add";
    return this.http.post(url,items);
  }
  
  }

