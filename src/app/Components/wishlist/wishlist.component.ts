import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public product :any=[];
  public grandTotal: number = 0;
  constructor(private wishList:WishlistService) { }

  ngOnInit(): void {
    this.wishList.getProduct().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.wishList.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.wishList.removeWishListItem(item);  
  }

  emptyCart(){
    this.wishList.removeAllWishList();
  }

}
