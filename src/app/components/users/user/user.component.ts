import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {DataTransferService} from '../../../services/data-transfer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }


  save(user: User): void {
this.dataTransferService.setUser(user);
  }
}
