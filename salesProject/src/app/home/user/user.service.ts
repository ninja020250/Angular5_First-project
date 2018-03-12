import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";

<<<<<<< HEAD
declare var $:any;
=======
declare var $: any;
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee



@Injectable()
export class UserService {
    constructor(private apiService: ApiService) { }
    getUser(id) {
        return new Promise((resolve, reject) => {
<<<<<<< HEAD
            this.apiService.get( `/api/getCustomer/${id}`).then(res => {
=======
            this.apiService.get(`/api/getCustomer/${id}`).then(res => {
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getCustomers/', {}).then(res => {
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
<<<<<<< HEAD
    getUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getCustomers/',{}).then(res => {
                console.log(res.json());
                    resolve(res.json());
            }).catch(err=>{
                console.log(err);
                reject(err);
            });
        });
    }
    saveUser(user){
        return new Promise((resolve,reject)=>{
            this.apiService.post('/api/saveCustomer/',user).then(res=>{
=======
    saveUser(user) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveCustomer/', user).then(res => {
                console.log(res.json());
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
                resolve(res.json());
            }).catch(err=>{
                reject(err);
            });
        });
    }
<<<<<<< HEAD
    
=======
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
}