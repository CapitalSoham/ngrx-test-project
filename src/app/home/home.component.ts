import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { company_list_success, refresh, user_list_request, user_list_success, is_filtered, filter, search } from '../app.actions';
import { HttpServiceService } from '../service/http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  public user_data: any;
  public company_data: any;
  public loaded: any;
  public loading: any;
  public filter: any;
  public displayedColumns: string[] = ['id', 'name', 'email', 'username', 'phone', 'website', 'company','view'];
  public search: any = '';
  public company: any = '';
  public Companys_list: any = [{ "title": "abc", "value": "abc" }, { "title": "abc", "value": "abc" }, { "title": "abc", "value": "abc" }, { "title": "abc", "value": "abc" }]
  public load_company: any;
  //you need to set same name as defined in [ like app.modules -> StoreModule.forRoot({users: userReducer}) ]
  constructor(public store: Store<{ users: any }>, public apiService: HttpServiceService) { }

  ngOnInit(): void {
    this.getUserList({});
  }
  click() {
    console.log(this.search);
    this.store.dispatch(search({search_data:this.search}));
    this.store.dispatch(user_list_request());
    this.apiService.search({"search":this.search}).subscribe((res:any)=>{
      this.store.dispatch(user_list_success({ user: res.data }));
    })
  }
  drop() {
    console.log(this.company);
    this.store.dispatch(filter({ filter_data: this.company }));
    this.store.dispatch(is_filtered());
    this.getUserList({ "company.name": this.company });
  }
  getUserList(data: any) {
    console.log('userrrrrrrrrrr');
    this.store.select('users').subscribe((res) => {
      this.loaded = res.loaded;
      this.loading = res.loading;
    })
    if (!this.loaded && !this.loading) {
      this.store.dispatch(user_list_request());
      this.apiService.getUser(data).subscribe((user: any) => {
        console.log(user.data);
        this.store.dispatch(user_list_success({ user: user.data }));
      })
      if (!this.load_company) {
        this.apiService.getCompanyList().subscribe((data: any) => {
          this.store.dispatch(company_list_success({ company: data.data }));
        })
      }
    }
    this.store.select('users').subscribe((res) => {
      console.log(res);
      this.user_data = res.user;
      this.company_data = res.company;
      this.company = res.filter_data;
      this.load_company = res.load_company;
      this.search = res.search_data;
      console.log(res.filter_data);
    })
  }
  refresh() {
    this.store.dispatch(refresh());
    this.getUserList({});
  }

}
