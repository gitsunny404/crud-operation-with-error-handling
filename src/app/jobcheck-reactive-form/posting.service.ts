import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataModal } from './data.modal';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

constructor(private http : HttpClient) { }

  url : string = 'https://jobseeker-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerprofile/basicdetails';

  // Post 1 data service
 postService(data : dataModal) : Observable<dataModal>{
  return this.http.post<dataModal>(this.url, data);
 }
 
}
