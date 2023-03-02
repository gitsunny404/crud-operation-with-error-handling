import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalModal } from './jobcheck.modal';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

constructor(private http : HttpClient) { }

  url : string = 'https://jobseeker-profile-service.dev.jobcheck.in/jobseekerprofileservice/jobseekerprofile/basicdetails';

  postData(data : PersonalModal) : Observable<PersonalModal>{
    return this.http.post<PersonalModal>(this.url, data);
  }
}
