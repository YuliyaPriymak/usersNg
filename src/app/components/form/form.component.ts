import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/users/user.service';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usersList: User[] = [];
  Users;
  userId;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.usersList = value);
  }

  ngOnInit(): void {
  }

  checkInput(idUser: NgModel): void {
    this.userId = idUser.value.id;
    console.log(this.userId);
  }

}
