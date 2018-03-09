import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { loginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleService } from './role-list/role.service';
const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
      {path:'role-list',component:RoleListComponent}

    ]
  },
  { path: 'login',component:LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,loginService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
