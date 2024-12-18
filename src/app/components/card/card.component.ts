import { Component, inject, input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-sm border rounded-lg bg-secondary py-3">
      <!-- Imagen   -->
       <div class="flex justify-center">
         <img class="rounded-t-lg" src="assets/img/coffe.png" alt="" />
       </div>
      <!-- Contenido -->
      <div class="px-5">
        <div class="flex items-center justify-between">
          <!-- Costo   -->
          <div class="">
            <h5>{{nombre()}}</h5>
            <h5>{{precio()}}</h5>
          </div>
          <button
            type="button"
            class="text-white bg-accent hover:bg-accent-hover font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
  precio = input<number>();

  constructor(){}
  ngOnInit(): void {
     
  }

  navigateToCart(){
    console.log("card component navigation")
    this.router.navigate(['/cart']);
  }
}
