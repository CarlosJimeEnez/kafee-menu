import { HeaderComponent } from "../../components/header/header.component";
import { Component, inject, OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ViewCartComponent } from "./components/view-cart/view-cart.component";
import { SupabaseService } from "../../services/supabase-service.service";
import { Coffees } from "../../interfaces/coffee";
import { CardComponent } from "../../components/card/card.component";

interface Item {
  name: string;
}

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [
    HeaderComponent,
    MatSidenavModule,
    ViewCartComponent,
    ViewCartComponent,
    CardComponent,
  ],
  template: `
    <app-header></app-header>
    <div class="grid grid-cols-12 gap-4 px-5 pt-10">
      <div class="col-span-12 flex align-center justify-start p-4">
        <div class="me-auto ">
          <h2 class="tracking-tight leading-none font-bold font-sans">
            Nuestros Cafes
          </h2>
          <p class="text-text-secondary font-semibold font-sans">
            Elige tu café favorito
          </p>
        </div>

        <!-- Selector boton coffee and smothies -->
        <div class="flex items-center justify-center">
          <div class="bg-secondary rounded-2xl">
            <button
              class="bg-accent text-white font-semibold font-sans px-20 py-4 rounded-2xl"
            >
              <h5>Cafes</h5>
            </button>
            <button
              class="bg-secondary hover:bg-accent-hover hover:text-white text-text font-semibold font-sans px-20 py-4 rounded-2xl mx-1"
            >
              <h5>Smothies</h5>
            </button>
          </div>
        </div>
      </div>

      <!-- Selector Categorias  -->
      <div
        class="col-span-12 sticky top-3 z-10 bg-background p-3 flex items-center cursor-pointer justify-around border rounded-2xl "
      >
        <div><h5 class="text-accent">Todos</h5></div>
     
        <div>   <h5 class="text-text-secondary hover:text-accent">Ofertas</h5> <p class="text-text-secondary">Desarrollo</p></div>
        
        <div><h5 class="text-text-secondary hover:text-accent">Expressos</h5> <p  class="text-text-secondary">Desarrollo</p></div>
        
        <div><h5 class="text-text-secondary hover:text-accent">Capuccino</h5> <p  class="text-text-secondary">Desarrollo</p></div>
      </div>

      @if (this.coffeeLoaded) { @for (coffee of coffees; track coffee.id) {
      <div class="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-2">
        <app-card
          [id]="coffee.id"
          [nombre]="coffee.Nombre"
          [precio]="coffee.PrecioBase"
          [descripcion]="coffee.Descripcion"
        ></app-card>
      </div>
      } }
    </div>

    <app-view-cart></app-view-cart>
  `,
  styles: ``,
})
export class MenuComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  coffeeLoaded = false;
  coffees: Coffees[] = [];

  constructor() {}
  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const data = await this.supabaseService.getData("Productos");
    this.coffees = data ?? [];
    console.log(this.coffees[0].PrecioBase);
    this.coffeeLoaded = true;
  }
}
