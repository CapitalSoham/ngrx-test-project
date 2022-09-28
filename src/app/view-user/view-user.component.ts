import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public user_data:any;
  constructor(public apiService: HttpServiceService,public router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
    this.apiService.getUser(this.router.snapshot.params).subscribe((user: any) => {
      console.log(user.data);
      this.user_data = user.data;
    })
  }

}
