import { Component } from '@angular/core';
import { CrudService } from './crud.service';
import { PostsModal } from './firsts.modal';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent {

  constructor(private crudService : CrudService){}

  //storing date to allPosts so that I and use this to use it on HTML Page.
  allPosts : PostsModal[] = [];

  // Get method to get All Posts form the server
  getPosts(){
    console.log("Get all posts.")
    this.crudService.getService().subscribe((data)=>{
      console.log(data);
      this.allPosts = data;
    }, (error) =>{
      console.log("Error Message :",error);
    }
    )
  }

  // Posting date from ts file 
  postingData : PostsModal = 
      {
        id : 9,
        title : "Title 1",
        body : "Body 1"
    }
  
  // Post Method to post the postingData to the server
  postPosts(){
    const data = this.postingData;
    this.crudService.postService(data).subscribe(response=>{
      console.log('New post created with ID:', response.id);
    }, error => {
      console.log('Error:', error);
    });
  }

  // Delete Method to delete the post form the server using the ID
  deletePost() {
    const postId = 6; // ID of the post to be deleted
    this.crudService.deleteService(postId)
      .subscribe(response => {
        console.log(`Post deleted successfully with ID: ${postId}`, response);
      }, error => {
        console.log('Error deleting post:', error);
      });
    }
  // Update method to update the post on the server using the ID
    updatePost() {
      const postId = 6; // ID of the post to be updated
      const updatedPost = {
        id : postId,
        title: 'Updated Post Title',
        body: 'Updated post body'
      };
      this.crudService.updateService(postId, updatedPost)
        .subscribe(response => {
          console.log(`Post updated successfully with ID ${postId}:`, response);
        }, error => {
          console.log('Error updating post:', error);
        });
    }

  // Get method to get 1 post using id
  onePost : {} = {};
  getOnePost(){
    const postId = 5; // ID of the post to be retrieved
    this.crudService.getOneService(postId)
      .subscribe(response => {
        console.log('Post retrieved successfully:', response);
        this.onePost = response;
        console.log(this.onePost)
      }, error => {
        console.log('Error retrieving post:', error);
      });
  }

}
