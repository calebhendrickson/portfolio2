import { Component, OnInit }   from '@angular/core';

import { ActivatedRoute, Params }      from '@angular/router';
import { Post }                        from './post';
import { PostService }                 from './post.service';

import                                      'rxjs/add/operator/switchMap';


@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styles: [`
      .post-detail {
        border: 1px black solid;
        width: 80%;
        margin: auto;
        margin-top: 50px;
      }
      .post-price {
        float: right;
        vertical-align: top;
      }
      .post-body {
        text-indent: 50px;
      }
    `]
})

export class PostDetailComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  post: Post;
  ngOnInit() : void {
    this.post = this.postService.getPost(+ this.route.snapshot.paramMap.get('id'));
  }
}
