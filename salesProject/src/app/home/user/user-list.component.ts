import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }
  roles: any[];
  ngOnInit() {
    this.userService.getRoles().then((roles: any) => {
      this.roles = roles;
    });
  }
 

}
