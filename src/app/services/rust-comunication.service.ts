import { Injectable } from "@angular/core";
import { invoke } from "@tauri-apps/api/core";
import { UserInvitado } from "../interfaces/userInvitado";
import { OrderRequest } from "../interfaces/orderRequest";

@Injectable({
  providedIn: "root",
})
export class RustComunicationService {
  constructor() {}

  loginUsuario(funcionName: string): Promise<any> {
    return invoke(funcionName);
  }

  OrdenDescripcion(funcionName: string, order: OrderRequest): Promise<any> {

    return invoke(funcionName, {
      request: order,
    });
  }
}
