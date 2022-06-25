import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.scss']
})
export class EarringComponent implements OnInit {
  productData: any = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProduct().subscribe((res) => {
      console.log(res);
      this.productData = res;
      // this.filterCategory = res;
    });
  }


}
