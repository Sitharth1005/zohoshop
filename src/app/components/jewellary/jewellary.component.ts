import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import jewellarydata from 'src/app/products.json';
interface Jewellary{
  id:Number;
  title:any;
  price:any;
  description:any;
  category:any;
  image:any;
  rating:any;}

@Component({
  selector: 'app-jewellary',
  templateUrl: './jewellary.component.html',
  styleUrls: ['./jewellary.component.css']
})
export class JewellaryComponent implements OnInit {
  jewellary:Jewellary[]=jewellarydata;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
   
  }
  
}
