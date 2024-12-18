import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SupabaseService } from "../../services/supabase-service.service";
import { Coffees } from "../../interfaces/coffee";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [],
  template: `
    <main class="grid grid-cols-12 gap-4 mb-5">
      <!-- Imagen   -->
      <div class="col-span-6">
        <img
          src="assets/img/coffe.png"
          alt="Cafe"
          class="w-full h-full object-cover rounded-2xl"
        />
      </div>
      @if (this.dataLoaded) {
      <!-- Contenido -->
      <div class="col-span-6">
        <div class="flex items-center ">
          <h1 class="leading-tight">{{this.coffee?.Nombre}}</h1>
          <button
            class="m-auto bg-background p-2 rounded-full"
            (click)="close()"
          >
            <img src="assets/close.svg" alt="close" />
          </button>
        </div>
        <h5>$mxn 1</h5>
        <!-- Time -->
        <span
          class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          Dark
        </span>
        <!-- Card cantidades  -->
        <div class="max-w-md p-3 bg-background border rounded-2xl mt-5">
          <h4>Descripcion</h4>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-text">Cantidad</h5>
            <h5>20 ml</h5>
          </div>

          <div class="border-b border-accent my-3"></div>

          <div class="flex items-center justify-between">
            <h5 class="text-text">Intensidad</h5>
            <h5>Fuerte</h5>
          </div>
        </div>

        <!-- Card tamaños -->
        <div class="max-w-md p-3 bg-background border rounded-2xl mt-5">
          <h4>Tamaño</h4>
          <div class="flex items-center justify-between mt-3">
            <h5 class="text-text">Chico</h5>
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div class="border-b border-accent my-3"></div>

          <div class="flex items-center justify-between">
            <div>
              <h5 class="text-text">
                Grande <span class="text-sm">+ 16mx</span>
              </h5>
            </div>

            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <button
          type="button"
          class="text-white bg-accent hover:bg-accent-hover font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
        >
          Agregar a el carrito
        </button>

        <button
          type="button"
          class="text-white bg-accent hover:bg-accent-hover font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
        >
          Comprar ahora
        </button>
      </div>
      } @else {
      <!-- Loading -->
      <div class="col-span-4 flex items-center justify-center w-full h-full  border border-gray-200 rounded-lg bg-gray-50 ">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      }
    </main>
  `,
  styles: ``,
})
export class CartComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  coffee?: Coffees = undefined;
  dataLoaded = false;

  id: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });

    this.getDrink();
  }

  getDrink() {
    console.log(this.id);
    this.supabaseService.getDataById<Coffees>("Productos", this.id).subscribe({
      next: (data) => {
        this.coffee = data;
        console.log("Drink data fetched:", data);
      },
      error: (error) => {
        console.error("Error fetching coffee:", error);
      },
      complete: () => {
        console.log("Drink data fetched successfully");
        this.dataLoaded = true;
      },
    });
  }

  close() {
    this.router.navigate(["/"]);
    console.log("close");
  }
}
