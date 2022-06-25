import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:any='http://localhost:3000/products';
  constructor(private http: HttpClient) { }


  getAllProduct(){
    return this.http.get(this.url);
   }
}
