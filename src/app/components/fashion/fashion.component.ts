import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import fashionData from 'src/app/products.json';
interface Fashion{
  id:Number;
  title:any;
  price:any;
  description:any;
  category:any;
  image:any;
  rating:any;}

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  fashion:Fashion[]=fashionData;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  

}
