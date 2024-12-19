import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../environment/environment.dev";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = environment.SUPABASE_URL;
    const SUPABASE_KEY = environment.SUPABASE_API;

    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  // Ejemplo: Obtener datos de una tabla
  async getData(table: string) {
    const { data, error } = await this.supabase.from(table).select("*");
    if (error) {
      console.error("Error al obtener datos:", error.message);
    }
    return data;
  }

  // Method to get a single item by ID as an Observable
  getDataById<T>(table: string, id: number): Observable<T> {
    return new Observable<T>((subscriber) => {
      this.supabase
        .from(table)
        .select("*")
        .eq("id", id)
        .single() // Ensures that only a single item is returned
        .then(({ data, error }) => {
          if (error) {
            subscriber.error(error);
            return;
          }
          subscriber.next(data as T);
          subscriber.complete();
        });
    });
  }

  insertData<T>(table: string, data: T): Observable<T> {
    return new Observable<T>((subscriber) => {
      this.supabase
        .from(table)
        .insert(data)
        .single() // Inserta un único registro y devuelve el objeto creado
        .then(({ data, error }) => {
          if (error) {
            subscriber.error(error); // Manejo de errores
            return;
          }
          subscriber.next(data as T); // Devuelve el dato insertado
          subscriber.complete();
        });
    });
  }
  
}
