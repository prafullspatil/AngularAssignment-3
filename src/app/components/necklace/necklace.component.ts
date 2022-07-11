import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.scss']
})
export class NecklaceComponent implements OnInit {
  productData: any = [];
  constructor(private api:ApiService,private cartService:CartService) { }

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
}
