import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import {UserComponent} from './components/users/user/user.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserPostsComponent } from './components/posts/user-posts/user-posts.component';
import { PostsCommentsComponent } from './components/comments/posts-comments/posts-comments.component';
import {ShareModule} from '../share/share.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserPostsComponent,
    PostsCommentsComponent,
    ReactiveFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
