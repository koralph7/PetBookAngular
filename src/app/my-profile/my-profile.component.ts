import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { IdSenderService } from '../home/idSender.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from './post.model';
import { PostService } from './post.service';
import { MyProfile } from './myProfile.model';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


posts: Post;

  info: any;
  userId = this.token.getId();

  @Input() myprofile:MyProfile;

  constructor(private token: TokenStorageService, private postService: PostService,
    private idSender: IdSenderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      
      id: this.token.getId(),


      
    }

    this.getProfile();
    this.getPosts();
  }

  getProfile():  void {

    var y = +this.userId;

    this.postService.getmyProfile(y)
      .subscribe(myprofile => this.myprofile = myprofile);


  }

  getPosts(): void {
    
    this.postService.getPosts(this.userId)
    .subscribe(posts => this.posts = posts);


}

}
