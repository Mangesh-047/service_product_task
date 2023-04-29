import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {


  productArray: Array<Iproduct> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.productArray = this._productService.getAllProduct()

    // console.log(this.productArray);

  }

}
