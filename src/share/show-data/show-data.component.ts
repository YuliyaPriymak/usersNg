import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../app/services/data-transfer.service';
import {User} from '../../app/models/User';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
userData: Partial<User>;
  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.userData = this.dataTransferService.getUser();
  }

}
