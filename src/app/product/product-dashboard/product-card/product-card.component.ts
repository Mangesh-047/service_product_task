import { Component, Input, OnInit } from '@angular/core';
import { IproStatus, Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input()
  proObj!: Iproduct;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  onstatusChange(prod: Iproduct, status: IproStatus) {


    this.productService.updateStatus(prod, status)


  }


}
