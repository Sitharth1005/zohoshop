import { ConfigService } from 'src/app/config.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import productData from 'src/app/products.json';

interface Product{
  id:Number;
  title:any;
  price:any;
  description:any;
  category:any;
  image:any;
  rating:any;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=productData;
  public productList : any ;
  searchkey:string="";
   constructor(private cartService:CartService,private http:HttpClient,private config:ConfigService) { }

    ngOnInit(): void {
      this.cartService.search.subscribe((val:any)=>{
        this.searchkey=val;
      })
      console.log(this.searchkey);
    }
    addToCart(cart:any){
      this.config.addToCart(cart).subscribe((data)=>{
        console.log(data);
      })
    }
    


}
      


