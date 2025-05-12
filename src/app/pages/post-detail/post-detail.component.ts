import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  post!: Post;
  errorMessage: string = '';


  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      route => {
      const id = route.get('id');
      if (id) {
        this.getPostDetail(+id);
      }
    });
  }


  getPostDetail(id:number):void{
    this.postsService.getPostById(id)
    .subscribe({
      next: (data)=>{
        this.post = data;
        this.errorMessage = '';
      },
      error: () =>{
        this.errorMessage = 'Ocorreu um erro ao carregar o post';
      }
    });
  }

}
