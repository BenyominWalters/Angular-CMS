import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  @Input() user: User;

  admin = [false, true];
  user = User;
  errors: Array<any> = [];
  errorMessage: string;
  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location

  ) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.getUser(id);
}

getUser(id: string): void {
  this.userService.getUser(id).subscribe(user => {this.user = user.user, console.log(this.user)});
}

goBack(): void {
  this.location.back();
}

response(response): void{
  console.log(response)
   if(response.success===false){
     this.errors = response.error.errors;
     this.errorMessage = response.error.message;
  }



}

  newUser(): void {
    this.userService.editUser(this.user).subscribe(
      (response) => {this.response(response)}
    );
    this.submitted = true;
  }


}
