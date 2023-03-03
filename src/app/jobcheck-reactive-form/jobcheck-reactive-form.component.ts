import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostingService } from './posting.service';

@Component({
  selector: 'app-jobcheck-reactive-form',
  templateUrl: './jobcheck-reactive-form.component.html',
})
export class JobcheckReactiveFormComponent {

  myForm !: FormGroup;
  constructor(private fb: FormBuilder, private crudService : PostingService, private router : Router ) { }
  
  ngOnInit(): void {
    this.createReactiveForm();
  }

  // getters
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get gender() { return this.myForm.get('gender'); }
  get dateOfBirth() { return this.myForm.get('dateOfBirth'); }
  get city() { return this.myForm.get('city'); }


  createReactiveForm(){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', []]
    });
  }

  errorMessage : string = '';
  submitForm(){
    console.log("Submit is clicked");
    if (this.myForm.valid) {
      const data = this.myForm.value;
      console.log(this.myForm.value);
      console.log("Date in yyyy-mm-dd format :",this.myForm.value.dateOfBirth);
      this.crudService.postService(data).subscribe(
        (res) => {
          console.log('New post created with ID:', res.profileId);
          this.router.navigate(['/second'])
        },
        (error) => {
          console.log(error);
          console.log(error.error);
          this.errorMessage = error.error;
          
        }
      );
    }
    else{
      console.log('Form is invalid');
      this.myForm.markAllAsTouched();
    }
  }

  // convertDateFormat(dateString: string): string {
  //   const parts = dateString.split('-');
  //   return `${parts[2]}-${parts[1]}-${parts[0]}`;
  // }
}
