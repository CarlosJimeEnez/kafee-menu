import { Routes } from "@angular/router";
import { CartComponent } from "./features/cart/cart.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./features/menu/menu.component";

export const routes: Routes = [
    {path: "", component: MenuComponent},
    {path: 'cart', component: CartComponent}
];
