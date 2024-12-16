import { Component } from "@angular/core";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [],
  template: `
    <main class="grid grid-cols-12 gap-4">
      <!-- Imagen   -->
      <div class="col-span-6"></div>
      <!-- Contenido -->
      <div class="col-span-6">
        <h1>Cafe</h1>
        <h5>$mxn 1</h5>
        <!-- Time -->
        <span
          class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >
          Dark
        </span>

        <!-- Card cantidades  -->
        <div class="max-w-md p-6 bg-background border rounded-2xl mt-5">
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
        <div class="max-w-md p-6 bg-background border rounded-2xl mt-5">
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
      </div>
    </main>
  `,
  styles: ``,
})
export class CartComponent {}
