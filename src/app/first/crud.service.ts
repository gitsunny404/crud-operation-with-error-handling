import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.urls';
import { PostsModal } from './firsts.modal';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http : HttpClient) { }

  // serverURL
  url : string = environment.apiUrl;
  
  // Get all posts service
  getService() : Observable<PostsModal[]>{
    return this.http.get<PostsModal[]>(this.url);
  }

  // Post 1 data service
 postService(data : PostsModal) : Observable<PostsModal>{
  return this.http.post<PostsModal>(this.url, data);
 }

 // Delete date with ID service
 deleteService(id : number){
  return this.http.delete(`${this.url}/${id}`)
 }

 // Update date with ID service
 updateService(id: number, post: PostsModal): Observable<PostsModal> {
  return this.http.put<PostsModal>(`${this.url}/${id}`, post);
}

// Get post by ID service
getOneService(id: number): Observable<PostsModal> {
  return this.http.get<PostsModal>(`${this.url}/${id}`);
}

  
}
