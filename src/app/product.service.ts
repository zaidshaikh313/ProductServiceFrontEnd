import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="http://localhost:8080/"

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    return this.http.get<any>("http://localhost:8080/cart/products").pipe(map((res:any)=>{
      return res;
    })
    );
  }
  addtoCart(pid:any){
    return this.http.put<any>("http://localhost:8080/cart/add/" + pid,null).pipe(map((res:any)=>{
      return res;
    })
    );

  }
  removeFromCart(pid:any){
    return this.http.put<any>("http://localhost:8080/cart/remove/" + pid,null).pipe(map((res:any)=>{
      return res;
    })
    );

  }
  getCartProducts(){
    return this.http.get<any>("http://localhost:8080/cart").pipe(map((res:any)=>{
      return res;
    })
    );

  }
}
