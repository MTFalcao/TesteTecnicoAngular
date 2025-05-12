import { Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'create-post', component: CreatePostComponent},
  { path: 'post-detail/:id', component: PostDetailComponent }
];
