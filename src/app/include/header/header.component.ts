import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem: number =0;
  public totalWishListItem: number =0;
  constructor(private cartService:CartService,private wishList:WishlistService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    });

    this.wishList.getProduct().subscribe(res=>{
      this.totalWishListItem=res.length;
    })

  }

}
