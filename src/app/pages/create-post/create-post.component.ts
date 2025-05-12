import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule,CommonModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postTitle: string = '';
  postUrl: string = '';
  postBody: string = '';
  errorMessage: string = '';

  constructor(private postService: PostsService) { }

  createPost(): void {
    const newPost = {
      title: this.postTitle,
      image: this.postUrl,
      body: this.postBody
    };

    this.postService.contentPost(newPost)
      .subscribe({
        next: (data) => {
          console.log('Post criado com sucesso:', data);
          this.postTitle = '';
          this.postUrl = '';
          this.postBody = '';
        },
        error: () => {
          this.errorMessage = 'Erro ao criar post.';
        }
      });
  }
}
