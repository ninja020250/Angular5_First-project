import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }
  users: any[];
  ngOnInit() {
    this.userService.getUsers().then((users: any) => {
      this.users = users;
    });
  }
 detail(user){
   this.router.navigate(["/main/user-detail", user.Id]);
 }
 create(){
   this.router.navigate(["/main/user-detail",0]);
 }
}
