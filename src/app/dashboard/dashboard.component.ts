import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   productData: any = [];
  // public filterCategory: any;
  constructor(private api:ApiService, private cartService:CartService,private wishList:WishlistService) { }

  ngOnInit(): void {
    this.api.getAllProduct().subscribe((res) => {
      console.log(res);
      this.productData = res;
      // this.filterCategory = res;
    });
  }

   addToCart(product : any) {
    // alert('product added to Cart ');
    this.cartService.addToCart(product);
    console.log(product);
  }

  addToWishList(product: any){
    this.wishList.addToWishList(product);
    console.log(product);
  }



  //  @Input() filter(category:string){
  //       this.filterCategory =this.productData.filter((a:any)=>
  //       {
  //         if(a.category == category || category=='')
  //         return a;
  //       })
  //   }
   
  }
  
  


