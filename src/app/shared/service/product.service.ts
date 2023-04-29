import { Injectable } from '@angular/core';
import { IproStatus, Iproduct } from '../model/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArray: Iproduct[] = [
    {
      pname: 'Iphone',
      pdetail: 'the product name is Iphone 13 max',
      pstatus: 'In-Progress',
      id: 'fasfsdf'
    },
    {
      pname: 'Samsung',
      pdetail: 'the product name is samsung m21',
      pstatus: 'In-Progress',
      id: 'fasfsdf'
    }
  ]
  constructor(private _snackbarService: SnackbarService) { }


  getAllProduct(): Array<Iproduct> {
    return this.productArray
  }

  addProduct(product: Iproduct): void {
    this.productArray.push(product)
    this._snackbarService.snackBarOpen(`${product.pname} product is Added`)
  }

  updateStatus(prod: Iproduct, status: IproStatus) {

    this.productArray.forEach(e => {
      if (e === prod) {
        e.pstatus = status
      }
    })

    this._snackbarService.snackBarOpen(`the ${prod.pname} status is Updated to ${status}`)
  }
}
