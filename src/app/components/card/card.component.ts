import { Component, inject, input, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-sm border  rounded-lg bg-secondary py-3 ">
      <!-- Imagen   -->
       <div class="flex justify-center">
         <img class="rounded-t-lg" src="assets/img/coffe.png" alt="" />
       </div>
      <!-- Contenido -->
      <div class="px-5">
        <div class="flex items-center justify-between">
          <!-- Costo   -->
          <div class="flex flex-col">
            <h5>{{nombre()}}</h5>
            <p class="text-text-secondary">{{descripcion()}} (Desarrollo) </p>
            <h5>MX$ {{precio()}}</h5>
          </div>
          <button
            type="button"
            class="text-white bg-accent hover:bg-accent-hover font-medium rounded-full text-sm px-5 mx-2 py-2.5 text-center me-2 mb-2 "
            (click)="navigateToCart()"
            >
            <img class="w-5 h-5" src="assets/add_2.svg" alt="asset add" />
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent implements OnInit {
  private router = inject(Router);
  nombre = input("Nombre");
  precio = input<string>();
  id = input<number>();
  descripcion = input<string>();

  constructor(){}
  ngOnInit(): void {
    
  }

  navigateToCart(){
    const id = this.id();
    this.router.navigate(['/cart'], {
      queryParams: { id: id },
    });
  }
}
