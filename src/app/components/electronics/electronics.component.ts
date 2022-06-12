import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import electronicsdata from 'src/app/products.json';
interface Electronics{
  id:Number;
  title:any;
  price:any;
  description:any;
  category:any;
  image:any;
  rating:any;}

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronics:Electronics[]=electronicsdata;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  
}
