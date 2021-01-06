import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {UserResolveService} from './services/users/user-resolve.service';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {UserPostsComponent} from './components/posts/user-posts/user-posts.component';
import {PostsCommentsComponent} from './components/comments/posts-comments/posts-comments.component';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {users: UserResolveService}},
  {path: 'users/details/:id', component: UserDetailsComponent,
    children: [
      {
        path: 'post', component: UserPostsComponent
      }
    ]
  },
  {path: 'users/details/:id/post/comments', component: PostsCommentsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
