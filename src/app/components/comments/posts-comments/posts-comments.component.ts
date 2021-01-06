import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../../services/comments/comment.service';
import {Comment} from '../../../models/Comment';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {
  @Input() postId;
  postCommentsList: Comment[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
   this.activatedRoute.queryParams.subscribe(params => {
     this.commentService.getPostComments(params.id).subscribe(value => {
       this.postCommentsList = value;
     });
   });
  }

  ngOnInit(): void {
  }

}
