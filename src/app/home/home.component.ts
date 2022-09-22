import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { refresh, user_list_request, user_list_success } from '../app.actions';
import { HttpServiceService } from '../service/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user_data: any;
  public loaded:any;
  public loading:any;
  //you need to set same name as defined in [ like app.modules -> StoreModule.forRoot({users: userReducer}) ]
  constructor(public store: Store<{users:any}>, public apiService: HttpServiceService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    console.log('userrrrrrrrrrr');
    this.store.select('users').subscribe((res)=>{
      this.loaded = res.loaded;
      this.loading = res.loading;
    })
    if(!this.loaded && !this.loading){
      this.store.dispatch(user_list_request());
      this.apiService.getUser().subscribe((user: any) => {
        console.log(user);
        this.store.dispatch(user_list_success({user}));
      })
    }
    this.store.select('users').subscribe((res)=>{
      this.user_data = res.user;
    })
  }
  refresh() {
    this.store.dispatch(refresh());
    this.getUserList();
  }

}
