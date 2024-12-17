import { Component } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [],
  template: `
     <!-- Sidenav -->
     <div 
      [class.translate-x-0]="isOpen" 
      [class.translate-x-full]="!isOpen"
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div class="p-4">Cart Content</div>
    </div>

    <button
    (click)="toggleSidenav()" class="sticky bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-fit mx-auto flex justify-center text-white bg-accent hover:bg-accent-hover items-center font-semibold font-sans px-5 py-4 rounded-2xl" 
    >
    <div class="flex items-center justify-center" >
      <p>Ver carrito</p>
    <img
        class="w-5 h-5 ml-2"
        src="assets/shopping_cart.svg"
        alt="shopping cart"
      />
    </div>
      
    </button>
  `,
  styles: ``
})
export class ViewCartComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
