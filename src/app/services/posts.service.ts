import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = environment.api;

  constructor(private http:HttpClient) { }

  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }



}
