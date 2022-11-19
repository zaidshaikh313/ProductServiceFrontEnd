import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  added: boolean = false;
  constructor(
    private service: ProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getProducts();


  }

  //Getting Products from Backend
  getProducts() {
    this.products = [];
    this.service.getProducts().subscribe((res) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.products.push(res[i])
      }
      // this.products=res;
    });
    console.log(this.products);
  }

  //Adding Product to cart

  addtoCart(pid) {
    this.service.addtoCart(pid).subscribe((res) => {
      this.ngOnInit();
      alert(res.message);

    }, err => {
      alert(err.message);
    });



  }
 
}
