import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Post } from '../my-profile/post.model';
import { TokenStorageService } from '../auth/token-storage.service';
import { PostService } from '../my-profile/post.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { User } from '../user/user.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  @ViewChild('f') petForm: NgForm;
  posts: Post[];
  post = new Post;

  // results: Object;

  // searchTerm$ = new Subject<string>();

  heroes$: Observable<User[]>;
  private searchTerms = new Subject<string>();

  info: any;
  userId = this.token.getId();

  constructor(private token: TokenStorageService, private postService: PostService, private router: Router) 
  {
    
   }

   search(term: string): void {
    this.searchTerms.next(term);
  }
   

  ngOnInit():void {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      
      id: this.token.getId()
  }

  

  }

  // searchOn(){

  //   this.postService.search(this.searchTerm$)
  //     .subscribe(results => {
  //       this.results = results;
  //     });



  
  

  addPost(){
    this.postService.addPost(this.userId, this.post)
            .subscribe((response)=> {
              console.log(response);
            })    
    
    
             
    this.router.navigate(['myProfile']);
 

  }

  

}
