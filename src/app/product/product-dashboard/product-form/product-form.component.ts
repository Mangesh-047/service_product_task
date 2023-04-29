import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _utilityService: UtilityService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onAddProduct(pn: HTMLInputElement, pd: HTMLTextAreaElement) {


    if ((pn.value && pd.value).length > 0) {

      let product: Iproduct = {
        pname: pn.value,
        pdetail: pd.value,
        pstatus: 'In-Progress',
        id: this._utilityService.uuid()
      }

      // console.log(product);


      this._productService.addProduct(product)

      pn.value = '';
      pd.value = '';
    }

  }

}
