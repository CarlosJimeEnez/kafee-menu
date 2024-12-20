import { Component, inject } from "@angular/core";
import { RustComunicationService } from "../../services/rust-comunication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sing-up",
  standalone: true,
  imports: [],
  template: `
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 h-[40vh] bg-background  rounded-2xl"></div>
      <div class="col-span-12 mt-5 flex justify-start items-center">
        <h1 class="px-5  text-text leading-none">Bienvenidos a kaffee kiosko</h1>
      </div>
      <div class="col-span-12 flex justify-start items-center">
        <h5 class="px-5 text-text-secondary">Por favor seleccione una opcion para continuar</h5>
      </div>

      <div class="col-span-12 mt-12 flex justify-center items-center gap-5">
        <div class="">
          <button class="bg-secondary-accent p-5 rounded-2xl hover:bg-secondary-hover-2" (click)="InvitadoLogin()">
            <h2 class="text-white">Invitado</h2>
          </button>
        </div>
        <div class="">
          <button class="border p-5 rounded-2xl hover:bg-black hover:text-white">
            <h2 class="">Ingresar</h2>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SingUpComponent {
  private rustBackend = inject(RustComunicationService);
  private router = inject(Router);

  constructor() {}

  InvitadoLogin() {
    this.rustBackend.loginUsuario("invitado_login").then((user) => {
      // Guardar en session storage
      sessionStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/menu"]);
    }).catch((err) => {
      alert("Error en el servidor");
    });
  }
}
