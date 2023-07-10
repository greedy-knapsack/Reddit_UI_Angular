import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment.payload';
import { PostService } from '../shared/post.service';
import { PostModel } from '../shared/post-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient,private postService:PostService) { }

  getAllCommentsForPost(postId: number):Observable<CommentPayload[]>{
    return this.http.get<CommentPayload[]>('http://localhost:8082/api/comments/by-post/'+postId); 
  }

  postComment(commentPayload: CommentPayload):Observable<any>{
    return this.http.post<any>('http://localhost:8082/api/comments', commentPayload);
  }

  getAllCommentsByUser(name: string):Observable<CommentPayload[]> {
    return this.http.get<CommentPayload[]>('http://localhost:8082/api/comments/by-user/' + name);
  }

}
