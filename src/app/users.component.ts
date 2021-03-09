import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: `./usersListData.component.html/`,
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  welcome: string;
  datalists: any; //create the array list
  show: boolean; //flag value set the to show the msg
  testdata: string;
  constructor() {
    this.show = true;
    this.testdata = "Toggle Content Using NgIF";
    this.welcome = "Welcome All Users Using NgFor";
    this.datalists = [
      {
        name: "Mahesh",
        age: "25"
      },
      {
        name: "Shakti",
        age: "23"
      },
      {
        name: "Radha",
        age: "21"
      },
      {
        name: "Krishna",
        age: "23"
      },
      {
        name: "Rahul",
        age: "30"
      }
    ];
  }

  //Click event for handling the toggle
  clickEvent() {
    this.show = !this.show;
  }
}
