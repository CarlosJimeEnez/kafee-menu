import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ViewCartComponent } from "./components/view-cart/view-cart.component";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [
    CardComponent,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
    ViewCartComponent,
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
        <h5 class="text-accent">Todos</h5>
        <h5 class="text-text-secondary hover:text-accent">Ofertas</h5>
        <h5 class="text-text-secondary hover:text-accent">Expressos</h5>
        <h5 class="text-text-secondary hover:text-accent">Capuccino</h5>
        <h5 class="text-text-secondary hover:text-accent">Personalizados</h5>
      </div>

      @for (coffe of coffees; track $index) {
      <div class="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-2">
        <app-card></app-card>
      </div>
      }
    </div>
      
    <app-view-cart></app-view-cart>
  `,
  styles: ``,
})
export class MenuComponent {
  coffees: Array<any> = [1, 2, 3, 4, 5];
}
