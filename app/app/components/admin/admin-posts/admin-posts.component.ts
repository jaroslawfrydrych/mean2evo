import {Component, OnInit} from '@angular/core';
import {AdminPostsService} from './admin-posts.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss'],
  providers: [AdminPostsService]
})
export class AdminPostsComponent implements OnInit {

  public posts: Array<any>;
  public loading: boolean = true;

  constructor(private adminPostsService: AdminPostsService) {
  }

  ngOnInit() {
    this.adminPostsService.getPosts()
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      },
      err => {
        console.log(err);
      },
      () => {
        this.handleCompleteLoading();
      });
  }

  handleCompleteLoading() {
    this.loading = false;
  }

}