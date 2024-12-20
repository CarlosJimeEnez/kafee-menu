import { Routes } from "@angular/router";
import { CartComponent } from "./features/cart/cart.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./features/menu/menu.component";
import { SingUpComponent } from "./features/sing-up/sing-up.component";

export const routes: Routes = [
    {path: "", component: SingUpComponent},
    {path: "menu", component: MenuComponent},
    {path: 'cart', component: CartComponent}
];
