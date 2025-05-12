import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  errorMessage:string = ''
  searchBar: string = ''


  constructor(
    private postService: PostsService,
    private router: Router

  ){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPost()
    .subscribe({
      next:(data)=>{
        this.posts = data;
        this.filteredPosts = data;
      },
      error: ()=>{
        this.errorMessage = 'Error'
      }
    });
  }

  filterPosts(){
    const find = this.searchBar.toLowerCase();
    this.filteredPosts = this.posts
    .filter(
      post =>
        post.title.toLowerCase().includes(find)
    );
  }

}
