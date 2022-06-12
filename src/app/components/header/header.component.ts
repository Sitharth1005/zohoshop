import { CartService } from 'src/app/services/cart.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   constructor(private cartService:CartService) { }
   public totalitem:number=0;
   public searchterm:string='';

  ngOnInit(): void {
   

  }
  search(event:any){
    this.searchterm=(event.target as HTMLInputElement).value;
    console.log(this.searchterm);
    this.cartService.search.next(this.searchterm);  }

}
