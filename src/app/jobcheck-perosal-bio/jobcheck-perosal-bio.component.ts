import { Component } from '@angular/core';
import { CrudService } from './crud.service';
import { PersonalModal } from './jobcheck.modal';

@Component({
  selector: 'app-jobcheck-perosal-bio',
  templateUrl: './jobcheck-perosal-bio.component.html'
})
export class JobcheckPerosalBioComponent {

  constructor(private crud : CrudService){}

  newuser : PersonalModal = {
    name: "Sunny Kumar",
    email: "mailsunny404+30@gmail.com",
    gender : "MALE",
    dateOfBirth: new Date('2002-02-21'),
    city: "Bengalore",
    profileId : '',
  }

  PostData(){
    const data = this.newuser;
    this.crud.postData(data).subscribe(response=>{
      console.log('New post created with ID:');
      console.log(response);
      console.log(response.profileId)
    }, error => {
      console.log('Error:', error);
    });
  }

}
