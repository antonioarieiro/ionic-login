import { LoginRoutingModule } from "./pages/login/login-routing.module";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.page").then((m) => m.HomePage)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login-routing.module").then(
        (m) => m.LoginRoutingModule
      )
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
