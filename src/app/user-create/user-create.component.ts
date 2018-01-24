import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  admin = [false, true];

    model = new User('00018', 'Formtest1', 'Formlastname1', 'form_user1', 'form1@example.com', this.admin[0]);

    submitted = false;

    onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
