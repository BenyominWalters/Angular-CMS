import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  admin = [false, true];
  user = new User();
  errors: Array<any> = [];
  errorMessage: string;
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router

  ) { }

ngOnInit(): void {}

response(response): void{
  console.log(response)
   if(response.success===false){
     this.errors = response.error.errors;
     this.errorMessage = response.error.message;
  }

  /* Instead of hidden message on HTML page, can redirect with this script:
    if(response.success===true){
    this.router.navigate(['/users/detail/', response.user._id]);
  }*/

}

  newUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {this.response(response)}
    );
    this.submitted = true;
  }


}
