import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  authUsers = [
    {
      username: "shivam",
      password: "123456"
    },
    {
      username: "lokvidya",
      password: "lokvidya"
    },
    {
      username: "admin",
      password: "admin"
    }
  ];

  usersList = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      website: "hildegard.org",
      company: "Romaguera-Crona"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      website: "anastasia.net",
      company: "Deckow-Crist"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      website: "ramiro.info",
      company: "Romaguera-Jacobson"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      website: "kale.biz",
      company: "Robel-Corkery"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      website: "demarco.info",
      company: "Keebler LLC"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      website: "ola.org",
      company: "Considine-Lockman"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      website: "elvis.io",
      company: "Johns Group"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      website: "jacynthe.com",
      company: "Abernathy Group"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      website: "conrad.com",
      company: "Yost and Sons"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      website: "ambrose.net",
      company: "Hoeger LLC"
    }
  ];

  constructor() {}

  login({ username, password }): boolean {
    let res = false;
    this.authUsers.forEach(user => {
      if (user.username === username && user.password === password) {
        localStorage.setItem("user", user.username);
        res = true;
      }
    });
    return res;
  }

  loggedIn() {
    return !!localStorage.getItem("user");
  }

  logout() {
    localStorage.removeItem("user");
  }

  getSingleUser(id: number) {
    let userData = null;
    this.usersList.forEach(user => {
      if (user.id === id) {
        userData = user;
      }
    });
    return userData;
  }

  updateUser(newData) {
    this.usersList.forEach(user => {
      if (user.id === newData.id) {
        user.name = newData.name;
        user.username = newData.username;
        user.email = newData.email;
        user.website = newData.website;
        user.company = newData.company;
      }
    });
  }

  deleteUser(id: number) {
    this.usersList = this.usersList.filter(user => user.id !== id);
  }
}
