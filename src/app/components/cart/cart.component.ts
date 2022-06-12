import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any=[]
  public grandtotal:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
  }
  

}
