import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishList : any=[]
  public productList = new BehaviorSubject<any>([]);
  constructor() { }


  getProduct(){
    return this.productList.asObservable();
  }

 
  setProduct(product : any){
    this.wishList.push(...product);
    this.productList.next(product)
  }

  addToWishList(product : any){
    this.wishList.push(product);
    this.productList.next(this.wishList);
    // this.getTotalPrice();
    console.log(this.wishList)
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.wishList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeWishListItem(product : any){
    this.wishList.map((a:any,index:any)=>{
      if(product.id===a.id){
          this.wishList.splice(index,1);
      }

    });
    this.wishList.next(this.wishList)
  }

  removeAllWishList(){
    this.wishList=[]
    this.productList.next(this.wishList)
  }
}
