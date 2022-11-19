import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:any=[];

  constructor(
    private apiService:ProductService
  ){}

  ngOnInit(): void {
    this.getProducts();

}

getProducts(){
  this.cartProducts=[];

  this.apiService.getCartProducts().subscribe((res)=>{
    for (let i = 0; i < res.length; i++) {
      this.cartProducts.push(res[i])
    }

  })

}
 removeFromCart(pid){
    this.apiService.removeFromCart(pid).subscribe((res)=>{
      alert(res.message);
      this.ngOnInit();


    },err=>{
      alert(err.message);
    });
    
  }

}
