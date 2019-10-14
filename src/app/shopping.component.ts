/*This class will be the component used for rendering all of the postings in
  one page in list form.*/
import { Component, OnInit } from '@angular/core';

import { PostService }       from './post.service';
import { Post }              from './post';

@Component ({
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styles: [ `
      .post-title-bar:hover {
        background-color: #4d8ee2 !important;
        color: white;
        cursor: pointer;
      }

      .posts-container {
        margin: 5px;
        margin-top: 10px;
        border: 1px solid black;
        width: 50%;
        overflow-y: auto;
        height: 400px;
        margin-left: 15%;
      }

      .post-title-bar {
        background: grey;
        color: white;
        vertical-align: top;
        border: 1px solid black;
      }

      .post-price {
        float: right;
        vertical-align: top;
      }

      .post-body {
        background: white;
        color: black;
      }

      .filter-container {
        height: 80%;
        overflow-y: auto;
        position: fixed;
        vertical-align: top;
        overflow-x: hidden;
        width: 10%;
        float: left;
        background-color: #47494c;
      }
    `]
})

export class ShoppingComponent implements OnInit {
  posts: Post[] = [];
  filterTypes: string[] = [];
  selectedPost: Post = null;

  constructor(private postService: PostService) {}

  onHover(post: Post): void {
    this.selectedPost = post;
  }
  onOut(): void {
    this.selectedPost = null;
  }
  filter(type: string): void {
    this.posts = this.postService.getPostsFilter(type);
  }
  ngOnInit(): void
  {
    this.posts = this.postService.getPosts();

    this.filterTypes.push("All");
    for (var i = 0; i < this.posts.length; i++)
    {
      this.filterTypes.push(this.posts[i].type);
    }
  }
}
