import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../my-profile/post.model';
import { MyProfile } from '../my-profile/myProfile.model';
import { TokenStorageService } from '../auth/token-storage.service';
import { PostService } from '../my-profile/post.service';
import { IdSenderService } from '../home/idSender.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user.model';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {

  posts: Post;

  
//   @Input() id:number;

@Input() myprofile:MyProfile;

  @Input() user: User;

  constructor(private token: TokenStorageService, private postService: PostService,
    private idSender: IdSenderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    


      this.getProfile();
      this.getPosts();
   
  }

  getProfile():  void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.postService.getmyProfile(4)
      .subscribe(myprofile => this.myprofile = myprofile);


  }

  getPosts(): void {
    


    this.postService.getPosts("4")
    .subscribe(posts => this.posts = posts);


}

}
