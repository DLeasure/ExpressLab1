import { Component } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCartFrontEnd';

  myCart;

  constructor(private cartService : CartService) {
    this.cartService.getAllItems().subscribe(items => {
      this.myCart = items;
      console.log(this.myCart);
    });
    // this.requestService.getPosts().subscribe(item => {
    //   this.posts = item.data.children;
    //   this.posts = this.posts.slice(1,11);
    //   console.log(this.posts);
    // });
  };
};
