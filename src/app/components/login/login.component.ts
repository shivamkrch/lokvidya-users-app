import { UsersService } from "./../../services/users.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData = {
    username: "",
    password: ""
  };

  constructor(
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigateByUrl("/");
    }
  }

  login() {
    if (this.usersService.login(this.userData)) {
      this.router.navigateByUrl("");
      this.snackBar.dismiss();
    } else {
      this.snackBar.open("Invalid Credentials!");
    }
  }
}
