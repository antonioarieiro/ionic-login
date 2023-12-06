import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; // Importar Router
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.scss" ]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  redirectToRegister() {
    // Usar o método navigate para redirecionar
    this.router.navigate([ "/login/register" ]);
  }
  redirectToLogin() {
    // Usar o método navigate para redirecionar
    this.router.navigate([ "/home" ]);
  }
}
