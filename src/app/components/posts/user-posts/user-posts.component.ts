import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/posts/post.service';
import {Comment} from '../../../models/Comment';
import {CommentService} from '../../../services/comments/comment.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  userPostsList: Post[] = [];
  id;
  // commentsList: Comment[] = [];
  postId;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = this.router.getCurrentNavigation().extras.state.userId;
      this.postService.getUserPosts(this.id).subscribe(posts => {
        this.userPostsList = posts;
      });
    });
  }

  ngOnInit(): void {
  }
}
