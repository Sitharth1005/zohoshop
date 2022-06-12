import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})
export class CartService {

    public cartItemList :any=[]
    public productList=new BehaviorSubject<any>([]);
    public search=new BehaviorSubject<string>("");
   
}

