import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
<<<<<<< HEAD
import { Router,ActivatedRoute } from '@angular/router';

=======
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',

})
export class UserDetailComponent implements OnInit {
<<<<<<< HEAD
  routerSubscription:any;
  id:number;
  user:any={};
  constructor(private router:Router, private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params=>{
      this.id = +params['id'];
      if(this.id > 0){
        this.userService.getUser(this.id).then(res=>{
=======
  routerSubscription: any;
  id: number;
  user: any = {};
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        this.userService.getUser(this.id).then(res => {
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
          this.user = res;
          console.log(this.user);
        });
      }
    });
<<<<<<< HEAD
    }
    ngOnDestroy(){
      this.routerSubscription.unsubcribes(); 
    }
    save(user){
      this.userService.saveUser(this.user).then((res:any)=>{
        if(this.id === 0)this.router.navigate(["/main/user-detail",res.Id]);
      })
    }

=======
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  save() {
    this.userService.saveUser(this.user).then((res: any) => {
      if (this.id === 0) this.router.navigate(['/main/user-detail', res.Id]);
    })
  }
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
}
