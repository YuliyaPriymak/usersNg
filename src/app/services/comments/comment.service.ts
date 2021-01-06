import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  // getPostComments(id): Observable<Comment[]>{
  //   return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  // }
  getPostComments(id): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
