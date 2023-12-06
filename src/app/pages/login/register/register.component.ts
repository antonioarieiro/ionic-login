import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; // Importar Router
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: [ "./register.component.scss" ]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  redirectToRegister() {
    // Usar o método navigate para redirecionar
    this.router.navigate([ "/login" ]);
  }
}
