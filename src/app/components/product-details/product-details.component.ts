import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productData : any = [];
  constructor(private api:ApiService,private router:ActivatedRoute,private cartService:CartService) { 
    
  }

  ngOnInit(): void {
    this.api.getProductById(this.router.snapshot.params['id'])
    .subscribe((resp)=> {
     this.productData = resp; 
      console.log(resp);
    });
  }
  addToCart(product : any) {
    // alert('product added to Cart ');
    this.cartService.addToCart(product);
    console.log(product);
  }
}
