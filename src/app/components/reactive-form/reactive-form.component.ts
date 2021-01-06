import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/users/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  usersList: User[] = [];
  users: User[];
  form: FormGroup;
  userName: FormControl = new FormControl('',
    [Validators.required, Validators.pattern(/[A-z]/), Validators.minLength(5)]);

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.usersList = value;
    });
    this.form = new FormGroup(
      {
        userName: this.userName
      }
    );
  }

  action(): void {
    console.log(this.userName);
    this.users = this.usersList.filter(el => el.name.toLowerCase() === this.userName.value.toLowerCase());
  }

}
