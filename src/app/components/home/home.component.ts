import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ["name", "username", "email", "edit"];
  selected = null;

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  select(id) {
    this.selected = this.usersService.getSingleUser(id);
  }

  deleteUser(id) {
    this.usersService.deleteUser(id);
    this.selected = null;
  }

  updateUser() {
    this.usersService.updateUser(this.selected);
    this.selected = null;
  }
}
