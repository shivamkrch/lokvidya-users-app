import { Router } from "@angular/router";
import { UsersService } from "./services/users.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Lokvidya Users App";

  constructor(private usersService: UsersService, private router: Router) {}

  logout() {
    this.usersService.logout();
    this.router.navigateByUrl("login");
  }
}
